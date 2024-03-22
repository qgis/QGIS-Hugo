import { test as base, expect } from "@playwright/test";
import { Sidebar } from "./fixtures/sidebar";
import { DownloadPage } from "./fixtures/download-page";
import { HomePage } from "./fixtures/home-page";

type DownloadPageFixtures = {
    homePage: HomePage;
    sidebar: Sidebar;
    downloadPage: DownloadPage;
};

const test = base.extend<DownloadPageFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    sidebar: async ({ page }, use) => {
        const sidebar = new Sidebar(page);
        await use(sidebar);
    },
    downloadPage: async ({ page }, use) => {
        const downloadPage = new DownloadPage(page);
        await use(downloadPage);
    },
});

test("Download page", async ({ homePage, sidebar, downloadPage }) => {
    await homePage.goto();
    await homePage.downloadLink.click();
    await expect(downloadPage.beforeDownloadText).toBeVisible();
    // TODO: Add tests for monthly and one-time tabs
    await expect(downloadPage.submitButton).toBeVisible();
    await expect(downloadPage.otherMethodsLink).toBeVisible();
    await expect(downloadPage.currencyInput).toBeVisible();
    await expect(downloadPage.skipDownloadButton).toBeVisible();
    await expect(sidebar.productLink).toBeVisible();
    await expect(sidebar.overviewLink).toBeVisible();
    await expect(sidebar.caseStudiesLink).toBeVisible();
    await expect(sidebar.pluginsLink).toBeVisible();
    await expect(sidebar.visualChangelogsLink).toBeVisible();
    await expect(sidebar.communityLink).toBeVisible();
    await expect(sidebar.getInvolvedLink).toBeVisible();
    await expect(sidebar.becomeCertifiedMemberLink).toBeVisible();
    await expect(sidebar.qgisFoundationLink).toBeVisible();
    await expect(sidebar.projectOrganisationLink).toBeVisible();
    await expect(sidebar.membersBlogsLink).toBeVisible();
    await expect(sidebar.fundingLink).toBeVisible();
    await expect(sidebar.downloadLink).toBeVisible();
    await expect(sidebar.resourcesLink).toBeVisible();
    await expect(sidebar.qgisResourcesLink).toBeVisible();
    await downloadPage.skipDownloadButton.click();
    await expect(downloadPage.beforeDownloadHeading).toBeVisible();
    await downloadPage.otherPlatformsHeading.click();
    await expect(downloadPage.otherPlatformsHeading).toBeVisible();
});
