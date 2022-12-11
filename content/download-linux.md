---
type: "page"
title: "Download"
subtitle: "QGIS Desktop for Linux"
draft: false
heroImage: "/img/banners/banner4.png"
---
Download and Download and Donate buttons
---

curl https://qgis.org/install.sh | sh

This is the stable release installer. For other Linux installer variants see here.

**Use QGIS Desktop on Linux**

- Open a terminal window
- Copy and paste the command above into your terminal and press enter
- Search or scroll through the applications list for QGIS Desktop
- Click the shortcut entry to launch QGIS

**Next steps**

- If you are just starting out, read the Gentle Inroduction to GIS
- Follow the self paced training manual
- Get help using the user manual 
- Get community support via live chat, forums or mailing lists

**Use QGIS Desktop on Ubuntu Linux**

Open a terminal window
Copy and paste the command below into your terminal and press enter to install tools
`sudo apt install gnupg software-properties-common`
For apt version older than 2.4.0 (or Ubuntu < 22.*), create a folder to store the apt key
`sudo mkdir -m755 -p /etc/apt/keyrings`
Download the QGIS repository key to verify the packges from the QGIS repo:
`sudo wget -O /etc/apt/keyrings/qgis-archive-keyring.gpg https://download.qgis.org/downloads/qgis-archive-keyring.gpg`
Add the QGIS repo for the latest QGIS packages using your favorite text editor, replacing the suite value with your version of

Ubuntu if different:
Types: deb
URIs: https://qgis.org/ubuntu
Suites: jammy
Architectures: amd64
Components: main
Signed-By: /etc/apt/keyrings/qgis-archive-keyring.gpg
Add the QGIS repo for the latest QGIS packages using 
Update the apt repository cache
sudo apt update
Install QGIS
`sudo apt install qgis qgis-plugins-grass`

Next steps
If you are just starting out, read the Gentle Inroduction to GIS
Follow the self paced training manual
Get help using the user manual 
Get community support via live chat, forums or mailing lists