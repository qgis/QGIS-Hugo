import { test as base, expect } from "@playwright/test";
import { HomePage } from "./fixtures/home-page";
import { Sidebar } from "./fixtures/sidebar";
import { ProductPage } from "./fixtures/product-page";

type ProductPageFixtures = {
    homePage: HomePage;
    sidebar: Sidebar;
    productPage: ProductPage;
};

const test = base.extend<ProductPageFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    sidebar: async ({ page }, use) => {
        const sidebar = new Sidebar(page);
        await use(sidebar);
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
});

test("Product page", async ({ homePage, sidebar, productPage }) => {
    await homePage.goto();
    await homePage.downloadLink.click();
    await sidebar.productLink.click();
    await expect(productPage.fosQGISLink).toBeVisible();
    await expect(productPage.qgisOverview).toBeVisible();
    await expect(productPage.contentTab1Img).toBeVisible();
    await expect(productPage.createMapImg).toBeVisible();
    await expect(productPage.goToPluginsLink).toBeVisible();
    await expect(productPage.internationalConferenceImg).toBeVisible();
    await expect(productPage.communityMeetingsLink).toBeVisible();
    await expect(productPage.localUserGroupsImg).toBeVisible();
    await expect(productPage.localUserGroupsHeading).toBeVisible();
    await expect(productPage.localGroupsListLink).toBeVisible();
    await expect(productPage.joinTheCommunityLink).toBeVisible();
    await expect(productPage.amurumForestLink).toBeVisible();

    for (const text of productPage.productTextList) {
        await expect(productPage.pageBody).toContainText(text);
    }

    await productPage.mapsLink.click();
    for (const text of productPage.mapsTextList) {
        await expect(productPage.pageBody).toContainText(text);
    }

    await expect(productPage.screenshotsLink).toBeVisible();
    await productPage.screenshotsLink.click();

    for (const text of productPage.screenshotsTextList) {
        await expect(productPage.pageBody).toContainText(text);
    }
    await sidebar.caseStudiesLink.click();

    for (const text of productPage.caseStudiesTextList) {
        await expect(productPage.pageBody).toContainText(text);
    }

    await expect(productPage.amurumForestLink).toBeVisible();
    await expect(sidebar.pluginsLink).toBeVisible();
    await sidebar.visualChangelogsLink.click();

    for (const text of productPage.visualChangelogsTextList) {
        await expect(productPage.pageBody).toContainText(text);
    }
});
