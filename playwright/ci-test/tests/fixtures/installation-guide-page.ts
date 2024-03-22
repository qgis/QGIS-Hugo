import type { Page, Locator } from "@playwright/test";

export class InstallationGuidePage {
    public readonly pageBody: Locator;
    public readonly upcomingEvaluationLink: Locator;
    public readonly releaseScheduleLink: Locator;
    public readonly releaseCell1: Locator;
    public readonly releaseVersionPackageCell: Locator;
    public readonly packageCell: Locator;
    public readonly mainInstallersPageLink: Locator;
    public readonly osgeo4WInstallerLink: Locator;
    public readonly aptInstallGnupgPre: Locator;
    public readonly aptInstallAptPre: Locator;
    public readonly aptUpdatePre: Locator;
    public readonly aptInstallQgisPre: Locator;
    public readonly ubuntugisLink: Locator;
    public readonly ubuntugisDocumentationLink: Locator;
    public readonly releaseCell4: Locator;
    public readonly releaseVersionDescriptionCell: Locator;
    public readonly descriptionCell: Locator;
    public readonly repositoryCell: Locator;
    public readonly latestReleaseCell: Locator;
    public readonly releaseWithUbuntugisCell: Locator;
    public readonly releaseDebianUbuntuCell: Locator;
    public readonly releaseDebianUbuntuLink: Locator;
    public readonly releaseUbuntugisCell: Locator;
    public readonly longTermReleaseRepositoryCell: Locator;
    public readonly releaseDebianUbuntuCell2: Locator;
    public readonly releaseDebianLtrLink: Locator;
    public readonly releaseWithUbuntugisCell2: Locator;
    public readonly distributionCell: Locator;
    public readonly distributionVersionCodenameCell: Locator;
    public readonly codenameCell: Locator;
    public readonly alsoAvailableBasedOnCell: Locator;
    public readonly wgetQgisPre: Locator;
    public readonly qgisArchiveKeyringPre: Locator;
    public readonly mkdirAptPre1: Locator;
    public readonly mkdirAptPre2: Locator;
    public readonly aptUpdateInstallQgisPre: Locator;
    public readonly aptUpdateInstallQgisServerPre: Locator;
    public readonly dnfInstallQgisPre: Locator;
    public readonly dnfCoprEnableQgisPre1: Locator;
    public readonly dnfInstallQgisPythonPre: Locator;
    public readonly dnfInstallQgisServerPre: Locator;
    public readonly distributionCell2: Locator;
    public readonly distGrassFedora: Locator;
    public readonly qgisVersionCell: Locator;
    public readonly grassGisVersionCell: Locator;
    public readonly dnfCoprEnableQgisPre2: Locator;
    public readonly dnfInstallQgisPythonPre2: Locator;
    public readonly dnfInstallQgisServerPre2: Locator;
    public readonly fedoraCoprLink: Locator;
    public readonly distributionCell3: Locator;
    public readonly repositoryCell2: Locator;
    public readonly urpmiQgisPre: Locator;
    public readonly pacmanQgisPre: Locator;
    public readonly yaourtQgisLtrPre: Locator;
    public readonly flatpakInstallPre: Locator;
    public readonly flatpakRunPre: Locator;
    public readonly flatpakUpdatePre: Locator;
    public readonly spackInstallQgisPre: Locator;
    public readonly spackLoadQgisPre: Locator;
    public readonly spackEnvCreatePre: Locator;
    public readonly portInfoQgis3Pre: Locator;
    public readonly portInstallQgis3Pre: Locator;
    public readonly portSelfupdatePre: Locator;
    public readonly pkgInstallQgisPre: Locator;
    public readonly makeInstallQgisPre: Locator;
    public readonly pkgInstallQgisLtrSpan: Locator;
    public readonly makeInstallQgisLtrPre: Locator;
    public readonly pkgAddQgisPre: Locator;
    public readonly googlePlayLink: Locator;
    public readonly textList: string[] = [
        "QGIS Installers ¶ How to",
        "How to obtain QGIS?",
        "QGIS is available on Windows",
        "We recommend installing the",
        "To evaluate the upcoming",
        "In the feature frozen phase",
        "There are two options for",
        "For beginners the easiest way",
        "More advanced QGIS users",
        "The OSGeo4W repository",
        "Download OSGeo4W Installer",
        "Choose Express Install and",
        "The packages listed in the",
        "Most linux distributions",
        "Below you find instructions",
        "Note ¶ In the section",
        "Note ¶ Although you see ‘",
        "Note ¶ Suites in above lines",
        "Note ¶ Add qgis-server to",
        "To have newer versions, you",
        "Our main repository contains",
        "For Ubuntu we also used to",
        "Note ¶ The release packages",
        "Note ¶ Please remove all the",
        "More information are",
        "More information are",
        "Packages on https://",
        "Arch Linux is available in",
        "yaourt -S qgis-git",
        "For bugs and other behaviour",
        "For general Linux Flatpak",
        "QGIS on Flathub: https://",
        "Flathub files: https://github",
        "General info on installing",
        "QGIS package file on Spack:",
        "Spack related issues should",
        "Official All-in-one, signed",
        "The package management system",
        "Installing MacPorts and updating it and the ports are made with the Terminal.",
        "Note ¶ Concurrent",
        "Previous releases of the official installer can be downloaded from https://qgis",
        "Previous releases of the kyngchaos installer can be downloaded from https://www",
        "See: - https://openbsd.app/?",
        "An old and deprecated not",
        "Warning ¶ There is currently",
        "Warning ¶ QGIS testing",
        "Refer to INSTALL on how to",
        "QGIS Installers",
        "Windows",
        "Standalone installers",
        "OSGeo4W installer",
        "Linux",
        "Debian/Ubuntu",
        "Repositories",
        "Supported distribution versions:",
        "Fedora",
        "QGIS stable",
        "QGIS LTR (Long Term Release)",
        "SUSE / openSUSE",
        "Mandriva",
        "Slackware",
        "Arch Linux",
        "QGIS LTR",
        "QGIS testing",
        "Flatpak",
        "Spack",
        "Mac OS X / macOS",
        "QGIS nightly release",
        "MacPorts",
        "Old releases",
        "FreeBSD",
        "QGIS stable",
        "QGIS LTR",
        "OpenBSD",
        "Android",
        "QGIS Testing warning",
        "Installing from Source",
    ];

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.upcomingEvaluationLink = this.page
            .locator("p")
            .filter({ hasText: "To evaluate the upcoming" })
            .getByRole("link");
        this.releaseScheduleLink = this.page.getByRole("link", {
            name: "Release schedule",
        });
        this.releaseCell1 = this.page
            .getByRole("cell", { name: "Release", exact: true })
            .first();
        this.releaseVersionPackageCell = this.page
            .getByRole("row", { name: "Release Version Package", exact: true })
            .getByRole("cell")
            .nth(1);
        this.packageCell = this.page
            .getByRole("cell", { name: "Package" })
            .first();
        this.mainInstallersPageLink = this.page.getByRole("link", {
            name: "The main installers page",
        });
        this.osgeo4WInstallerLink = this.page.getByRole("link", {
            name: "OSGeo4W Installer",
        });
        this.aptInstallGnupgPre = this.page
            .locator("pre")
            .filter({ hasText: "sudo apt install gnupg" });
        this.aptInstallAptPre = this.page
            .locator("pre")
            .filter({ hasText: "sudo mkdir -m755 -p /etc/apt/" })
            .first();
        this.aptUpdatePre = this.page
            .locator("pre")
            .filter({ hasText: "sudo apt update" })
            .first();
        this.aptInstallQgisPre = this.page
            .locator("pre")
            .filter({ hasText: "sudo apt install qgis qgis-" })
            .first();
        this.ubuntugisLink = this.page.getByRole("link", {
            name: "ubuntugis",
            exact: true,
        });
        this.ubuntugisDocumentationLink = this.page.getByRole("link", {
            name: "ubuntugis documentation",
        });
        this.releaseCell4 = this.page
            .getByRole("cell", { name: "Release", exact: true })
            .nth(4);
        this.releaseVersionDescriptionCell = this.page
            .getByRole("row", { name: "Release Version Description" })
            .getByRole("cell")
            .nth(1);
        this.descriptionCell = this.page
            .getByRole("cell", { name: "Description" })
            .nth(1);
        this.repositoryCell = this.page
            .getByRole("cell", { name: "Repository" })
            .first();
        this.latestReleaseCell = this.page
            .getByRole("cell", { name: "Latest Release" })
            .nth(2);
        this.releaseWithUbuntugisCell = this.page
            .getByRole("cell", { name: "Release with ubuntugis-" })
            .first();
        this.releaseDebianUbuntuCell = this.page
            .getByRole("cell", { name: "Release for Debian and Ubuntu" })
            .first();
        this.releaseDebianUbuntuLink = this.page.getByRole("link", {
            name: "https://qgis.org/debian",
            exact: true,
        });
        this.releaseUbuntugisCell = this.page
            .getByRole("cell", { name: "Release with ubuntugis-" })
            .nth(2);
        this.longTermReleaseRepositoryCell = this.page.getByRole("cell", {
            name: "Long Term Release Repository",
        });
        this.releaseDebianUbuntuCell2 = this.page
            .getByRole("cell", { name: "Release for Debian and Ubuntu" })
            .nth(2);
        this.releaseDebianLtrLink = this.page.getByRole("link", {
            name: "https://qgis.org/debian-ltr",
        });
        this.releaseWithUbuntugisCell2 = this.page
            .getByRole("cell", { name: "Release with ubuntugis-" })
            .nth(2);
        this.distributionCell = this.page
            .getByRole("cell", { name: "Distribution" })
            .first();
        this.distributionVersionCodenameCell = this.page
            .getByRole("row", { name: "Distribution Version Codename" })
            .getByRole("cell")
            .nth(1);
        this.codenameCell = this.page.getByRole("cell", { name: "Codename" });
        this.alsoAvailableBasedOnCell = this.page.getByRole("cell", {
            name: "Also available based on",
        });
        this.wgetQgisPre = this.page
            .locator("pre")
            .filter({ hasText: "wget https://download.qgis." });
        this.qgisArchiveKeyringPre = this.page.locator("pre").filter({
            hasText:
                "./qgis-archive-keyring.gpg -------------------------- pub rsa4096 2022-08-08 [",
        });
        this.mkdirAptPre1 = this.page
            .locator("pre")
            .filter({ hasText: "sudo mkdir -m755 -p /etc/apt/" })
            .nth(1);
        this.mkdirAptPre2 = this.page
            .locator("pre")
            .filter({ hasText: "sudo mkdir -m755 -p /etc/apt/" })
            .nth(2);
        this.aptUpdateInstallQgisPre = this.page.locator("pre").filter({
            hasText: "sudo apt update sudo apt install qgis qgis-plugin-grass",
        });
        this.aptUpdateInstallQgisServerPre = this.page.locator("pre").filter({
            hasText:
                "sudo apt update sudo apt install qgis-server --no-install-recommends --no-",
        });
        this.dnfInstallQgisPre = this.page.locator("pre").filter({
            hasText:
                "sudo dnf install qgis python3-qgis qgis-grass qgis-server",
        });
        this.dnfCoprEnableQgisPre1 = this.page
            .locator("pre")
            .filter({ hasText: "sudo dnf copr enable dani/qgis" })
            .first();
        this.dnfInstallQgisPythonPre = this.page
            .locator("pre")
            .filter({ hasText: "sudo dnf install qgis python3" })
            .nth(1);
        this.dnfInstallQgisServerPre = this.page
            .locator("pre")
            .filter({ hasText: "sudo dnf install qgis-server" })
            .first();
        this.distributionCell2 = this.page
            .getByRole("cell", { name: "Distribution" })
            .nth(1);
        this.distGrassFedora = this.page
            .locator("table")
            .filter({
                hasText:
                    "Distribution Version QGIS version GRASS GIS version Fedora",
            })
            .locator("th")
            .nth(1);
        this.qgisVersionCell = this.page
            .getByRole("cell", { name: "QGIS version" })
            .first();
        this.grassGisVersionCell = this.page
            .getByRole("cell", { name: "GRASS GIS version" })
            .first();
        this.dnfCoprEnableQgisPre2 = this.page
            .locator("pre")
            .filter({ hasText: "sudo dnf copr enable dani/qgis-ltr" });
        this.dnfInstallQgisPythonPre2 = this.page
            .locator("pre")
            .filter({ hasText: "sudo dnf install qgis python3" })
            .nth(2);
        this.dnfInstallQgisServerPre2 = this.page
            .locator("pre")
            .filter({ hasText: "sudo dnf install qgis-server" })
            .nth(1);
        this.fedoraCoprLink = this.page.getByRole("link", {
            name: "https://copr.fedorainfracloud.org/coprs/dani/qgis-ltr/",
        });
        this.distributionCell3 = this.page
            .getByRole("cell", { name: "Distribution" })
            .nth(2);
        this.repositoryCell2 = this.page
            .getByRole("cell", { name: "Repository" })
            .nth(2);
        this.urpmiQgisPre = this.page
            .locator("pre")
            .filter({ hasText: "urpmi qgis-python qgis-grass" });
        this.pacmanQgisPre = this.page
            .locator("pre")
            .filter({ hasText: "pacman -S qgis" });
        this.yaourtQgisLtrPre = this.page
            .locator("pre")
            .filter({ hasText: "yaourt -S qgis-ltr" });
        this.flatpakInstallPre = this.page
            .locator("pre")
            .filter({ hasText: "flatpak install --from https" });
        this.flatpakRunPre = this.page
            .locator("pre")
            .filter({ hasText: "flatpak run org.qgis.qgis" });
        this.flatpakUpdatePre = this.page
            .locator("pre")
            .filter({ hasText: "flatpak update" });
        this.spackInstallQgisPre = this.page
            .locator("pre")
            .filter({ hasText: "spack install qgis" });
        this.spackLoadQgisPre = this.page
            .locator("pre")
            .filter({ hasText: "spack load qgis" });
        this.spackEnvCreatePre = this.page
            .locator("pre")
            .filter({ hasText: "spack env create myenv spack" });
        this.portInfoQgis3Pre = this.page
            .locator("pre")
            .filter({ hasText: "sudo port info qgis3" });
        this.portInstallQgis3Pre = this.page
            .locator("pre")
            .filter({ hasText: "sudo port install qgis3 +grass" });
        this.portSelfupdatePre = this.page
            .locator("pre")
            .filter({ hasText: "sudo port selfupdate sudo" });
        this.pkgInstallQgisPre = this.page
            .locator("pre")
            .filter({ hasText: "pkg install qgis" })
            .first();
        this.makeInstallQgisPre = this.page.locator("pre").filter({
            hasText: "cd /usr/ports/graphics/qgis make install clean",
        });
        this.pkgInstallQgisLtrSpan = this.page
            .locator("span")
            .filter({ hasText: "pkg install qgis-ltr" })
            .first();
        this.makeInstallQgisLtrPre = this.page
            .locator("pre")
            .filter({ hasText: "cd /usr/ports/graphics/qgis-" });
        this.pkgAddQgisPre = this.page
            .locator("pre")
            .filter({ hasText: "pkg_add qgis" });
        this.googlePlayLink = this.page.getByRole("link", {
            name: "https://play.google.com/store",
        });
    }
}
