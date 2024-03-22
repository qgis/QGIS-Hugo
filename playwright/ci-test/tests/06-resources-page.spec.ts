import { test as base, expect } from "@playwright/test";
import { Sidebar } from "./fixtures/sidebar";
import { QgisResourcesPage } from "./fixtures/qgis-resources-page";
import { InstallationGuidePage } from "./fixtures/installation-guide-page";
import { ReleasesPage } from "./fixtures/releases-page";
import { RoadmapPage } from "./fixtures/roadmap-page";
import { ReportsPage } from "./fixtures/report-page";
import { BooksPage } from "./fixtures/books-page";

type ResourcesPageFixtures = {
    sidebar: Sidebar;
    qgisResourcesPage: QgisResourcesPage;
    installationGuidePage: InstallationGuidePage;
    releasesPage: ReleasesPage;
    roadmapPage: RoadmapPage;
    reportsPage: ReportsPage;
    booksPage: BooksPage;
};

const test = base.extend<ResourcesPageFixtures>({
    sidebar: async ({ page }, use) => {
        const sidebar = new Sidebar(page);
        await use(sidebar);
    },
    qgisResourcesPage: async ({ page }, use) => {
        const qgisResourcesPage = new QgisResourcesPage(page);
        await use(qgisResourcesPage);
    },
    installationGuidePage: async ({ page }, use) => {
        const installationGuidePage = new InstallationGuidePage(page);
        await use(installationGuidePage);
    },
    releasesPage: async ({ page }, use) => {
        const releasesPage = new ReleasesPage(page);
        await use(releasesPage);
    },
    roadmapPage: async ({ page }, use) => {
        const roadmapPage = new RoadmapPage(page);
        await use(roadmapPage);
    },
    reportsPage: async ({ page }, use) => {
        const reportsPage = new ReportsPage(page);
        await use(reportsPage);
    },
    booksPage: async ({ page }, use) => {
        const booksPage = new BooksPage(page);
        await use(booksPage);
    },
});

test.describe("Resources pages", () => {
    test.beforeEach(async ({ qgisResourcesPage }) => {
        // Go to the resources url before each test.
        await qgisResourcesPage.goto();
    });

    test("QGIS resources", async ({ sidebar, qgisResourcesPage }) => {
        await expect(sidebar.resourcesLink).toBeVisible();
        await sidebar.resourcesLink.click();
        await expect(qgisResourcesPage.installationGuideLink).toBeVisible();
        await expect(qgisResourcesPage.getInvolvedLink).toBeVisible();
        await expect(qgisResourcesPage.tab3Element).toBeVisible();
        await expect(qgisResourcesPage.desktopUserGuideLink).toBeVisible();
        await expect(qgisResourcesPage.serverGuideLink).toBeVisible();
        await expect(qgisResourcesPage.qgisTrainingManualLink).toBeVisible();
        await expect(qgisResourcesPage.introductionInGISLink).toBeVisible();
        await expect(
            qgisResourcesPage.documentationGuidelinesLink,
        ).toBeVisible();
        await expect(qgisResourcesPage.pyQGISCookbookLink).toBeVisible();
        await expect(
            qgisResourcesPage.cPlusPlusAPIDocumentationLink,
        ).toBeVisible();
        await expect(qgisResourcesPage.pyQGISApiLink).toBeVisible();
        await expect(
            qgisResourcesPage.buildingQGISFromSourceLink,
        ).toBeVisible();
        await expect(qgisResourcesPage.forDownloadParagraph).toBeVisible();
        await expect(qgisResourcesPage.pdfManualsLink).toBeVisible();
        await expect(qgisResourcesPage.htmlZipManualsLink).toBeVisible();
        await expect(qgisResourcesPage.viewSupportOptionsLink).toBeVisible();

        for (const text of qgisResourcesPage.textList) {
            await expect(qgisResourcesPage.pageBody).toContainText(text);
        }
    });

    test("Installation guide", async ({ sidebar, installationGuidePage }) => {
        await expect(sidebar.installationGuideLink).toBeVisible();
        await sidebar.installationGuideLink.click();
        await expect(
            installationGuidePage.upcomingEvaluationLink,
        ).toBeVisible();
        await expect(installationGuidePage.releaseScheduleLink).toBeVisible();
        await expect(installationGuidePage.releaseCell1).toBeVisible();
        await expect(
            installationGuidePage.releaseVersionPackageCell,
        ).toBeVisible();
        await expect(installationGuidePage.packageCell).toBeVisible();
        await expect(
            installationGuidePage.mainInstallersPageLink,
        ).toBeVisible();
        await expect(installationGuidePage.osgeo4WInstallerLink).toBeVisible();
        await expect(installationGuidePage.aptInstallGnupgPre).toBeVisible();
        await expect(installationGuidePage.aptInstallAptPre).toBeVisible();
        await expect(installationGuidePage.aptUpdatePre).toBeVisible();
        await expect(installationGuidePage.aptInstallQgisPre).toBeVisible();
        await expect(installationGuidePage.ubuntugisLink).toBeVisible();
        await expect(
            installationGuidePage.ubuntugisDocumentationLink,
        ).toBeVisible();
        await expect(installationGuidePage.releaseCell4).toBeVisible();
        await expect(
            installationGuidePage.releaseVersionDescriptionCell,
        ).toBeVisible();
        await expect(installationGuidePage.descriptionCell).toBeVisible();
        await expect(installationGuidePage.repositoryCell).toBeVisible();
        await expect(installationGuidePage.latestReleaseCell).toBeVisible();
        await expect(
            installationGuidePage.releaseWithUbuntugisCell,
        ).toBeVisible();
        await expect(
            installationGuidePage.releaseDebianUbuntuCell,
        ).toBeVisible();
        await expect(
            installationGuidePage.releaseDebianUbuntuLink,
        ).toBeVisible();
        await expect(installationGuidePage.releaseUbuntugisCell).toBeVisible();
        await expect(
            installationGuidePage.longTermReleaseRepositoryCell,
        ).toBeVisible();
        await expect(
            installationGuidePage.releaseDebianUbuntuCell2,
        ).toBeVisible();
        await expect(installationGuidePage.releaseDebianLtrLink).toBeVisible();
        await expect(
            installationGuidePage.releaseWithUbuntugisCell2,
        ).toBeVisible();
        await expect(installationGuidePage.distributionCell).toBeVisible();
        await expect(
            installationGuidePage.distributionVersionCodenameCell,
        ).toBeVisible();
        await expect(installationGuidePage.codenameCell).toBeVisible();
        await expect(
            installationGuidePage.alsoAvailableBasedOnCell,
        ).toBeVisible();
        await expect(installationGuidePage.wgetQgisPre).toBeVisible();
        await expect(installationGuidePage.qgisArchiveKeyringPre).toBeVisible();
        await expect(installationGuidePage.mkdirAptPre1).toBeVisible();
        await expect(installationGuidePage.mkdirAptPre2).toBeVisible();
        await expect(
            installationGuidePage.aptUpdateInstallQgisPre,
        ).toBeVisible();
        await expect(
            installationGuidePage.aptUpdateInstallQgisServerPre,
        ).toBeVisible();
        await expect(installationGuidePage.dnfInstallQgisPre).toBeVisible();
        await expect(installationGuidePage.dnfCoprEnableQgisPre1).toBeVisible();
        await expect(
            installationGuidePage.dnfInstallQgisPythonPre,
        ).toBeVisible();
        await expect(
            installationGuidePage.dnfInstallQgisServerPre,
        ).toBeVisible();
        await expect(installationGuidePage.distributionCell2).toBeVisible();
        await expect(installationGuidePage.distGrassFedora).toBeVisible();
        await expect(installationGuidePage.qgisVersionCell).toBeVisible();
        await expect(installationGuidePage.grassGisVersionCell).toBeVisible();
        await expect(installationGuidePage.dnfCoprEnableQgisPre2).toBeVisible();
        await expect(
            installationGuidePage.dnfInstallQgisPythonPre2,
        ).toBeVisible();
        await expect(
            installationGuidePage.dnfInstallQgisServerPre2,
        ).toBeVisible();
        await expect(installationGuidePage.fedoraCoprLink).toBeVisible();
        await expect(installationGuidePage.distributionCell3).toBeVisible();
        await expect(installationGuidePage.repositoryCell2).toBeVisible();
        await expect(installationGuidePage.urpmiQgisPre).toBeVisible();
        await expect(installationGuidePage.pacmanQgisPre).toBeVisible();
        await expect(installationGuidePage.yaourtQgisLtrPre).toBeVisible();
        await expect(installationGuidePage.flatpakInstallPre).toBeVisible();
        await expect(installationGuidePage.flatpakRunPre).toBeVisible();
        await expect(installationGuidePage.flatpakUpdatePre).toBeVisible();
        await expect(installationGuidePage.spackInstallQgisPre).toBeVisible();
        await expect(installationGuidePage.spackLoadQgisPre).toBeVisible();
        await expect(installationGuidePage.spackEnvCreatePre).toBeVisible();
        await expect(installationGuidePage.portInfoQgis3Pre).toBeVisible();
        await expect(installationGuidePage.portInstallQgis3Pre).toBeVisible();
        await expect(installationGuidePage.portSelfupdatePre).toBeVisible();
        await expect(installationGuidePage.pkgInstallQgisPre).toBeVisible();
        await expect(installationGuidePage.makeInstallQgisPre).toBeVisible();
        await expect(installationGuidePage.pkgInstallQgisLtrSpan).toBeVisible();
        await expect(installationGuidePage.makeInstallQgisLtrPre).toBeVisible();
        await expect(installationGuidePage.pkgAddQgisPre).toBeVisible();
        await expect(installationGuidePage.googlePlayLink).toBeVisible();
        await expect(sidebar.documentationLink).toBeVisible();

        for (const text of installationGuidePage.textList) {
            await expect(installationGuidePage.pageBody).toContainText(text);
        }
    });

    test("Releases", async ({ page, sidebar, releasesPage }) => {
        await expect(sidebar.releasesLink).toBeVisible();
        await sidebar.releasesLink.click();

        for (const text of releasesPage.textList) {
            await expect(releasesPage.pageBody).toContainText(text);
        }
        await expect(releasesPage.listOfReleasesLink).toBeVisible();
        await expect(releasesPage.testsLink).toBeVisible();
        await releasesPage.testsLink.click();
    });

    test("Roadmap", async ({ sidebar, roadmapPage }) => {
        await expect(sidebar.roadmapLink).toBeVisible();
        await sidebar.roadmapLink.click();
        await expect(roadmapPage.event).toBeVisible();
        await expect(roadmapPage.latest).toBeVisible();
        await expect(roadmapPage.longTermRepo).toBeVisible();
        await expect(roadmapPage.freeze).toBeVisible();
        await expect(roadmapPage.date).toBeVisible();
        await expect(roadmapPage.weekNumber).toBeVisible();
        await expect(roadmapPage.weeks).toBeVisible();
        await expect(roadmapPage.longTermReleaseBegin).toBeVisible();
        await expect(roadmapPage.regularReleaseBegin).toBeVisible();
        await expect(roadmapPage.featureFreezeEnd).toBeVisible();
        await expect(roadmapPage.pointReleaseLatest).toBeVisible();
        await expect(roadmapPage.extraPointRelease).toBeVisible();
        await expect(roadmapPage.currentlySupportedReleases).toBeVisible();
        await expect(roadmapPage.nextReleases).toBeVisible();
        await expect(roadmapPage.platform).toBeVisible();
        await expect(roadmapPage.location).toBeVisible();
        await expect(roadmapPage.windows).toBeVisible();
        await expect(roadmapPage.osgeo4w).toBeVisible();
        await expect(roadmapPage.linux).toBeVisible();
        await expect(roadmapPage.debianUbuntu).toBeVisible();
        await expect(roadmapPage.macOS).toBeVisible();

        for (const text of roadmapPage.textList) {
            await expect(roadmapPage.pageBody).toContainText(text);
        }
    });

    test("Reports", async ({ page, sidebar, reportsPage }) => {
        await expect(sidebar.reportsLink).toBeVisible();
        await sidebar.reportsLink.click();
        await expect(reportsPage.certificationImage).toBeVisible();
        await expect(reportsPage.ogcCertificationLink).toBeVisible();
        await expect(reportsPage.performanceLink).toBeVisible();
        await expect(reportsPage.securityLink).toBeVisible();

        for (const text of reportsPage.textList) {
            await expect(reportsPage.pageBody).toContainText(text);
        }
    });

    test("Books", async ({ sidebar, booksPage }) => {
        await expect(sidebar.booksLink).toBeVisible();
        await sidebar.booksLink.click();
        await expect(booksPage.contactLink).toBeVisible();

        for (const text of booksPage.textList) {
            await expect(booksPage.pageBody).toContainText(text);
        }
    });
});
