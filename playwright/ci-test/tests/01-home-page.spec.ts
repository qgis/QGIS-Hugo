import { test as base, expect } from "@playwright/test";
import { Header } from "./fixtures/header";
import { HomePage } from "./fixtures/home-page";
import { Footer } from "./fixtures/footer";

type HomePageFixtures = {
    header: Header;
    homePage: HomePage;
    footer: Footer;
};

const test = base.extend<HomePageFixtures>({
    header: async ({ page }, use) => {
        const header = new Header(page);
        await use(header);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    footer: async ({ page }, use) => {
        const footer = new Footer(page);
        await use(footer);
    }
});

test.describe("Home page", () => {
    test.beforeEach(async ({ header, homePage }) => {
        // Go to the home url before each test.
        await homePage.goto();
    });

    test("Header", async ({ header }) => {
        await expect(header.logoLink).toBeVisible();
        await expect(header.productLink).toBeVisible();
        await header.productLink.hover();
        await expect(header.overviewLink).toBeVisible();
        await expect(header.caseStudiesLink).toBeVisible();
        await expect(header.pluginsLink).toBeVisible();
        await expect(header.visualChangelogLink).toBeVisible();
        await expect(header.communityLink).toBeVisible();
        await header.communityLink.hover();
        await expect(header.getInvolvedLink).toBeVisible();
        await expect(header.certifiedMemberLink).toBeVisible();
        await expect(header.qgisFoundationLink).toBeVisible();
        await expect(header.projectOrganisationLink).toBeVisible();
        await expect(header.membersBlogLink).toBeVisible();
        await expect(header.downloadLink).toBeVisible();
        await expect(header.resourcesLink).toBeVisible();
        await header.resourcesLink.hover();
        await expect(header.qgisResourcesLink).toBeVisible();
        await expect(header.installationGuideLink).toBeVisible();
        await expect(header.documentationLink).toBeVisible();
        await expect(header.releasesLink).toBeVisible();
        await expect(header.roadmapLink).toBeVisible();
        await expect(header.reportsLink).toBeVisible();
        await expect(header.booksLink).toBeVisible();
        await expect(header.supportLink).toBeVisible();
        await expect(header.blogLink).toBeVisible();
        await expect(header.donateLink).toBeVisible();
        await expect(header.searchInput).toBeVisible();
        await expect(header.searchInput).toBeEmpty();
    });

    test("Content", async ({ homePage }) => {
        await expect(homePage.freeOpenSourceSpatialDiv).toBeVisible();
        await expect(homePage.spatialWithoutCompromiseHeading).toBeVisible();
        await expect(homePage.createMapsHeading).toBeVisible();
        await expect(homePage.editLayersHeading).toBeVisible();
        await expect(homePage.processAndAnalyzeHeading).toBeVisible();
        await expect(homePage.shareMapsHeading).toBeVisible();
        await expect(homePage.exploreQGISLink).toBeVisible();
        await expect(homePage.powerOfOpenSourceHeading).toBeVisible();
        await expect(homePage.getInvolvedLink).toBeVisible();
        await expect(homePage.freeAndOpenSourceHeading).toBeVisible();
        await expect(homePage.freeDownloadLink).toBeVisible();
        await expect(homePage.youTubeVideoThumbnailOverlayImage).toBeVisible();
        await expect(homePage.startUsingQGISHeading).toBeVisible();
        await expect(homePage.goToMaterialsLink).toBeVisible();
        await expect(homePage.qgisSupportersHeading).toBeVisible();
        await expect(homePage.addYourLogoHereText).toBeVisible();
        await expect(homePage.silverPartnerText).toBeVisible();
        await expect(homePage.supportersGridDiv).toBeVisible();
        await expect(homePage.createMapsImg).toBeVisible();
        await expect(homePage.editLayersImg).toBeVisible();
        await expect(homePage.processImg).toBeVisible();
        await expect(homePage.shareMapsImg).toBeVisible();
        await expect(homePage.communityImg).toBeVisible();
        await expect(homePage.changeLogVideo).toBeVisible();
        await expect(homePage.otherSupporters).toBeVisible();

        for (const text of homePage.textList) {
            await expect(homePage.pageBody).toContainText(text);
        }
    });

    test("Footer", async ({ footer }) => {
        await expect(footer.banner).toBeVisible();
        await expect(footer.productList).toBeVisible();
        await expect(footer.communityList).toBeVisible();
        await expect(footer.resourcesList.first()).toBeVisible();
        await expect(footer.fundingList).toBeVisible();
        await expect(footer.downloadLink).toBeVisible();
        await expect(footer.overviewLink).toBeVisible();
        await expect(footer.caseStudiesLink).toBeVisible();
        await expect(footer.pluginsLink).toBeVisible();
        await expect(footer.visualChangelogsLink).toBeVisible();
        await expect(footer.getInvolvedLink).toBeVisible();
        await expect(footer.becomeCertifiedMemberLink).toBeVisible();
        await expect(footer.qgisFoundationLink).toBeVisible();
        await expect(footer.projectOrganisationLink).toBeVisible();
        await expect(footer.localUserGroupsLink).toBeVisible();
        await expect(footer.membersBlogsList).toBeVisible();
        await expect(footer.qgisResourcesLink).toBeVisible();
        await expect(footer.installationGuideLink).toBeVisible();
        await expect(footer.documentationLink).toBeVisible();
        await expect(footer.releasesLink).toBeVisible();
        await expect(footer.roadmapLink).toBeVisible();
        await expect(footer.reportsLink).toBeVisible();
        await expect(footer.booksLink).toBeVisible();
        await expect(footer.supportLink).toBeVisible();
        await expect(footer.blogLink).toBeVisible();
        await expect(footer.donateLink).toBeVisible();
        await expect(footer.membershipList).toBeVisible();
        await expect(footer.diversityStatementLink).toBeVisible();
        await expect(footer.codeOfConductLink).toBeVisible();
        await expect(footer.environmentalPolicyLink).toBeVisible();
        await expect(footer.licenseLink).toBeVisible();
        await expect(footer.visualStyleGuideLink).toBeVisible();
        await expect(footer.goodiesLink).toBeVisible();
        await expect(footer.logoImage).toBeVisible();
        await expect(footer.facebookLink).toBeVisible();
        await expect(footer.twitterLink).toBeVisible();
        await expect(footer.youtubeLink).toBeVisible();
        await expect(footer.mapstodonLink).toBeVisible();
        await expect(footer.ghLink).toBeVisible();
        await expect(footer.mailLink).toBeVisible();
    });
});
