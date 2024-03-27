#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
this script should be run from the root repo directory (../)

$ python scripts/update-schedule.py

will update data/conf.json and scripts/schedule.ics
'''

from urllib.request import urlopen
import csv
import json
import os
import re
import codecs
from datetime import datetime, timedelta, timezone
from icalendar import Calendar, Event

url = "https://docs.google.com/spreadsheets/u/1/d/1MOIjwon5eDI04DG6rX_HwucZkW1fxFJ0b_yB0xYETOE/export?format=csv&id=1MOIjwon5eDI04DG6rX_HwucZkW1fxFJ0b_yB0xYETOE&gid=1982100417#"

cal = Calendar()
cal.add('prodid', '-//Release Schedule//qgis.org//')
cal.add('version', '2.0')
cal['summary'] = 'QGIS Release Schedule'

resource = urlopen(url)
reader = csv.reader(codecs.iterdecode(resource, 'utf-8'), delimiter=',', quotechar='"')
first = True
f_date = None
pr_date = None
nr_date = None

ltr_version = None
lr_version = None
lr_is_ltr = False
lr_date = None

now = datetime.now(timezone.utc)

ocal = Calendar.from_ical(open("scripts/schedule.ics").read())

oevents = {}
for e in ocal.walk('VEVENT'):
    if 'uid' in e:
        if 'sequence' not in e:
            e.add('sequence', 0)

        oevents[e['uid']] = e


def adduid(ev, uid):
    ev.add('uid', uid)

    if uid in oevents:
        oe = oevents[uid]
        seq = oe['sequence']
        ev.add('sequence', seq)
        if 'last-modified' in oe:
            ev.add('last-modified', oe['last-modified'])

        if oe.to_ical() != ev.to_ical():
            if 'last-modified' in ev:
                del ev['last-modified']
            ev.add('last-modified', now)
            ev['sequence'] += 1
    else:
        ev.add('last-modified', now)
        ev.add('sequence', 0)


rows = []

for row in reader:
    if first:
        first = False
        continue

    event, _, _, _, _, _, _, _, _, date, weekno, weeks, lr, ltr, dev, ff, _ = row

    dt = datetime.strptime(date, '%Y-%m-%d').replace(tzinfo=timezone.utc) + timedelta(hours=12)

    if 'FF' in event:
        e = Event()
        e.add('summary', 'QGIS Feature Freeze {}'.format(dev))
        e.add('dtstart', dt)
        e.add('dtend', dt)
        adduid(e, 'ff-{}@qgis.org'.format(dev))
        cal.add_component(e)

    if 'SF' in event:
        e = Event()
        e.add('summary', 'QGIS Soft Freeze', dev)
        e.add('dtstart', dt)
        e.add('dtend', dt)
        adduid(e, 'sf-{}@qgis.org'.format(dev))
        cal.add_component(e)

    if ltr:
        label = 'Extra point release' if event == 'EPR' else 'Point release'
        prefix = 'epr' if event == 'EPR' else 'pr'

        e = Event()
        e.add('summary', 'QGIS {} {}'.format(label, ltr))
        e.add('dtstart', dt)
        e.add('dtend', dt)
        adduid(e, '{}-{}@qgis.org'.format(prefix, ltr))
        cal.add_component(e)

    if lr:
        if 'LTR' in event:
            label = 'Long-term release'
            prefix = 'ltr'
        elif 'LR' in event:
            label = 'Regular release'
            prefix = 'lr'
        elif event == 'EPR':
            label = 'Extra point release'
            prefix = 'epr'
        elif 'PR' in event:
            label = 'Point release'
            prefix = 'pr'

        e = Event()
        e.add('summary', 'QGIS {} {}'.format(label, lr))
        e.add('dtstart', dt)
        e.add('dtend', dt)
        adduid(e, '{}-{}@qgis.org'.format(prefix, lr))
        cal.add_component(e)

    if ("FF" in event or "SF" in event) and nr_date is None:
        f_date = dt

    if dt > now:
        if "PR" in event and pr_date is None:
            pr_date = dt

        if ("LR" in event or "LTR" in event) and nr_date is None:
            nr_date = dt
    else:
        if ltr:
            ltr_version = ltr
        if lr:
            lr_version = lr
            lr_date = dt

    rows.append([event, lr, ltr, dev, date, weekno, weeks])

o = open("csv/schedule.csv", "w")

o.write('"Event","Latest","Long-Term Repo","Freeze","Date","Week #","Weeks"\n')

lr_style = "rm-past"
ltr_style = "rm-past"

for event, lr, ltr, dev, date, weekno, weeks in rows:
    if ltr == ltr_version:
        ltr_style = "rm-current"
    if lr == lr_version:
        lr_style = "rm-current"

    o.write('"' + '","'.join([
        (":rm-current:{}" if "rm-current" in [ltr_style, lr_style] else "{}").format(event),
        ":{}:{}".format(lr_style, lr) if lr else "",
        ":{}:{}".format(ltr_style, ltr) if ltr else "",
        dev, date, weekno, weeks
    ]) + '"\n')

    if ltr_style == "rm-current":
        ltr_style = "rm-next"
    elif ltr_style == "rm-next" and ltr:
        ltr_style = "rm-future"

    if lr_style == "rm-current":
        lr_style = "rm-next"
    elif lr_style == "rm-next" and lr:
        lr_style = "rm-future"

o.write("\n")

o.close()

url = "https://docs.google.com/spreadsheets/u/1/d/1MOIjwon5eDI04DG6rX_HwucZkW1fxFJ0b_yB0xYETOE/export?format=csv&id=1MOIjwon5eDI04DG6rX_HwucZkW1fxFJ0b_yB0xYETOE&gid=1060997136"

resource = urlopen(url)
reader = csv.reader(codecs.iterdecode(resource, 'utf-8'), delimiter=',', quotechar='"')

ltr_name = None
ltr_note = None
ltr_binary = None
lr_name = None
lr_note = None
lr_binary = None
devversion = None
nextversion = None

for row in reader:
    r, name, note, binary = row
    if r == "LTR":
        ltr_name, ltr_note, ltr_binary = name, note, binary
    elif r == "LR":
        lr_name, lr_note, lr_binary = name, note, binary
    elif r == "DEV":
        devversion = name
    elif r == "NEXT":
        nextversion = name

for v, n in {ltr_version: ltr_name, lr_version: lr_name}.items():
    print(f"{v}:{n}")
    url = "https://raw.githubusercontent.com/qgis/QGIS/release-{0}/CMakeLists.txt".format("_".join(v.split('.')[:2]))
    cm = urlopen(url).read().decode('utf-8')
    rn = re.search("^set\(RELEASE_NAME \"(.*)\"\)$", cm, re.MULTILINE).group(1)
    assert n==rn, f"Expected {n}, found {rn}"

assert lr_version.split(".") > ltr_version.split("."), f"LR {lr_version} not higher than {ltr_version}"
assert devversion.split(".") > lr_version.split("."), f"DEV {devversion} not higher than {lr_version}"

shortver = "".join(lr_version.split(".")[:2])
for f in [
    # NOTE: there's no dir for versioned banners for the current website
    # f"themes/qgis-theme/static/images/qgisorg_banner{shortver}.png",
    # f"content/product/visual-changelogs/visualchangelog{shortver}/index.md"
]:
    assert os.path.exists(f), f"{f} not found"

ltrversion = ".".join(ltr_version.split(".")[:2])

with open("data/conf.json", "w") as f:
    json.dump({
        "WARNING": "produced from googlesheet via scripts/update-schedule.py - EDITS WILL BE LOST",
        "version": ".".join(lr_version.split(".")[:2]),
        "release": lr_version,
        "releasedate": lr_date.strftime("%d.%m.%Y"),
        "binary": lr_binary,
        "codename": lr_name,
        "releasenote": lr_note if lr_note != '' else ('RC' if lr_version.split('.')[2] == '0' else '\\u200B'),
        "ltrversion": ltrversion,
        "ltrrelease": ltr_version,
        "ltrcodename": ltr_name,
        "ltrbinary": ltr_binary,
        "ltrnote": ltr_note if ltr_note != '' else 'LTR',
        "shortver": shortver,
        "devversion": devversion,
        "nextversion": nextversion,
        "nextfreezedate": f_date.strftime('%Y-%m-%d %H:%M:%S UTC') if f_date is not None else None,
        "nextreleasedate": nr_date.strftime('%Y-%m-%d %H:%M:%S UTC') if nr_date is not None else None,
        "nextpointreleasedate": pr_date.strftime('%Y-%m-%d %H:%M:%S UTC'),
        "infeaturefreeze": f_date < now,

        # additional params:
        "yeartag": "%%Y",
        "devcite": f"https://docs.qgis.org/{ltrversion}/en/docs/developers_guide/index.html",
        "userguidecite": f"https://docs.qgis.org/{ltrversion}/en/docs/user_manual/index.html",
        "servercite": f"https://docs.qgis.org/{ltrversion}/en/docs/server_manual/index.html",
        "apicite": f"https://qgis.org/pyqgis/{ltrversion}/index.html",
        "lr_msi": f"https://qgis.org/downloads/QGIS-OSGeo4W-{lr_version}-{lr_binary}.msi",
        "lr_sha": f"https://qgis.org/downloads/QGIS-OSGeo4W-{lr_version}-{lr_binary}.sha256sum",
        "ltr_msi": f"https://qgis.org/downloads/QGIS-OSGeo4W-{ltr_version}-{ltr_binary}.msi",
        "ltr_sha": f"https://qgis.org/downloads/QGIS-OSGeo4W-{ltr_version}-{ltr_binary}.sha256sum",
        "weekly_msi": "https://download.osgeo.org/qgis/windows/weekly/?C=M&O=D",
    }, f, indent=4)

o = open("scripts/schedule.ics", "wb")
o.write(cal.to_ical())
o.close()
