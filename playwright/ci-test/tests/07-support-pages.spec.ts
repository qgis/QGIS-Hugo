import { test as base, expect } from "@playwright/test";
import { Sidebar } from "./fixtures/sidebar";
import { OtherSupportPage, SupportPage } from "./fixtures/support-page";
import { FaqPage } from "./fixtures/faq-page";
import { BugReportingPage } from "./fixtures/bug-reporting-page";

type SupportPageFixtures = {
    sidebar: Sidebar;
    supportPage: SupportPage;
    faqPage: FaqPage;
    bugReporting: BugReportingPage;
    otherSupportPage: OtherSupportPage;
};

const test = base.extend<SupportPageFixtures>({
    sidebar: async ({ page }, use) => {
        const sidebar = new Sidebar(page);
        await use(sidebar);
    },
    supportPage: async ({ page }, use) => {
        const supportPage = new SupportPage(page);
        await use(supportPage);
    },
    faqPage: async ({ page }, use) => {
        const faqPage = new FaqPage(page);
        await use(faqPage);
    },
    bugReporting: async ({ page }, use) => {
        const bugReporting = new BugReportingPage(page);
        await use(bugReporting);
    },
    otherSupportPage: async ({ page }, use) => {
        const otherSupportPage = new OtherSupportPage(page);
        await use(otherSupportPage);
    },
});

test.describe("Resources Pages", () => {
    test.beforeEach(async ({ supportPage }) => {
        // Go to the resources url before each test.
        await supportPage.goto();
    });

    test("Support", async ({ sidebar, supportPage }) => {
        await expect(sidebar.supportLink).toBeVisible();
        await sidebar.supportLink.click();
        for (const text of supportPage.textList) {
            await expect(supportPage.pageBody).toContainText(text);
        }
    });

    test("FAQ", async ({ page, faqPage }) => {
        await expect(faqPage.faqLink).toBeVisible();
        await faqPage.faqLink.click();
        await expect(faqPage.qgisIssueTrackerLink).toBeVisible();
        await expect(faqPage.bugReportingLink).toBeVisible();
        await expect(faqPage.qgisWebsiteLink).toBeVisible();
        await expect(faqPage.qgisGitHubLink).toBeVisible();
        await expect(faqPage.citeQGISUserGuide).toBeVisible();
        await expect(faqPage.preElements).toBeVisible();
        await expect(faqPage.kyngchaosLink).toBeVisible();
        await expect(faqPage.faunaliaLink).toBeVisible();
        await expect(faqPage.buildingQGISFromSourceLink).toBeVisible();

        for (const text of faqPage.textList) {
            await expect(faqPage.pageBody).toContainText(text);
        }
    });

    test("Bug Reporting", async ({ page, bugReporting }) => {
        await expect(bugReporting.bugReportingLink).toBeVisible();
        await bugReporting.bugReportingLink.click();
        await expect(bugReporting.bugPlaceFoundCell).toBeVisible();
        await expect(bugReporting.bugReportIssueCell).toBeVisible();
        await expect(bugReporting.qgisDesktopCell).toBeVisible();
        await expect(bugReporting.qgisGitHubLink).toBeVisible();
        await expect(bugReporting.qgisWebsiteCell).toBeVisible();
        await expect(bugReporting.qgisWebsiteGitHubLink).toBeVisible();
        await expect(bugReporting.qgisDocumentationCell).toBeVisible();
        await expect(bugReporting.qgisDocumentationGitHubLink).toBeVisible();
        await expect(bugReporting.cppAPICell).toBeVisible();
        await expect(bugReporting.cppAPIGitHubLink).toBeVisible();
        await expect(bugReporting.pyQGISAPICell).toBeVisible();
        await expect(bugReporting.pyQGISAPIGitHubLink).toBeVisible();
        await expect(bugReporting.externalPluginsCell).toBeVisible();
        await expect(bugReporting.authorRepositoryCell).toBeVisible();

        for (const text of bugReporting.textList) {
            await expect(bugReporting.pageBody).toContainText(text);
        }
    });

    test("Other support links", async ({ page, otherSupportPage }) => {
        await expect(otherSupportPage.communicationChannelsLink).toBeVisible();
        await otherSupportPage.navigateToCommunicationChannels();
        await expect(otherSupportPage.commercialSupportLink).toBeVisible();
        await otherSupportPage.navigateToCommercialSupport();

        for (const text of otherSupportPage.textList) {
            await expect(otherSupportPage.pageBody).toContainText(text);
        }

        await expect(otherSupportPage.stackExchangeLink).toBeVisible();
        await otherSupportPage.navigateToStackExchange();
        await expect(otherSupportPage.websiteCreationLink).toBeVisible();
        await otherSupportPage.navigateToWebsiteCreation();
    });
});
