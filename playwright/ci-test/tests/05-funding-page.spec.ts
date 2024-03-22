import { test as base, expect } from "@playwright/test";
import {
    FundingPage,
    MembersPage,
    PastMembersPage,
} from "./fixtures/funding-page";
import { HomePage } from "./fixtures/home-page";
import { Sidebar } from "./fixtures/sidebar";

type FundingPageFixtures = {
    homePage: HomePage;
    sidebar: Sidebar;
    fundingPage: FundingPage;
    membersPage: MembersPage;
    pastMembersPage: PastMembersPage;
};

const test = base.extend<FundingPageFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    sidebar: async ({ page }, use) => {
        const sidebar = new Sidebar(page);
        await use(sidebar);
    },
    fundingPage: async ({ page }, use) => {
        const fundingPage = new FundingPage(page);
        await use(fundingPage);
    },
    membersPage: async ({ page }, use) => {
        const membersPage = new MembersPage(page);
        await use(membersPage);
    },
    pastMembersPage: async ({ page }, use) => {
        const pastMembersPage = new PastMembersPage(page);
        await use(pastMembersPage);
    },
});

test.describe("Resources Pages", () => {
    test.beforeEach(async ({ fundingPage }) => {
        // Go to the resources url before each test.
        await fundingPage.goto();
    });
    test("Donate page", async ({ sidebar, fundingPage }) => {
        await expect(sidebar.fundingLink).toBeVisible();
        await sidebar.fundingLink.click();
        await expect(fundingPage.submitButton).toBeVisible();
        await expect(fundingPage.currencyInput).toBeVisible();
        await expect(fundingPage.donateButton).toBeVisible();

        let donateTextList = fundingPage.textList.find(
            (item) => item.page == "Donate",
        )?.texts;

        if (donateTextList) {
            for (const text of donateTextList) {
                await expect(fundingPage.pageBody).toContainText(text);
            }
        }

        // TODO: Add tests for monthly and one-time tabs
    });

    test("Membership page", async ({ sidebar, fundingPage }) => {
        await expect(sidebar.membershipLink).toBeVisible();
        await sidebar.membershipLink.click();

        let membershipTextList = fundingPage.textList.find(
            (item) => item.page == "Membership",
        )?.texts;

        if (membershipTextList) {
            for (const text of membershipTextList) {
                await expect(fundingPage.pageBody).toContainText(text);
            }
        }

        await expect(fundingPage.becomeSustainingMemberLink).toBeVisible();
        await expect(fundingPage.sustainingMembershipDiv).toBeVisible();
        await expect(fundingPage.sustainingMembershipSection).toBeVisible();
        await expect(fundingPage.writeTrearurerLink).toBeVisible();
        await expect(fundingPage.openSustainingMembersLink).toBeVisible();
    });

    test("Members page", async ({ sidebar, membersPage }) => {
        await sidebar.membershipLink.click();
        await expect(sidebar.membersLink).toBeVisible();
        await sidebar.membersLink.click();
        await expect(membersPage.flagshipHeading).toBeVisible();
        await expect(membersPage.flagshipArticle).toBeVisible();
        await expect(membersPage.largeHeading).toBeVisible();
        await expect(membersPage.largeArticle).toBeVisible();
    });

    test("Past Members page", async ({ sidebar, pastMembersPage }) => {
        await sidebar.membershipLink.click();
        await expect(sidebar.pastMembersLink).toBeVisible();
        await sidebar.pastMembersLink.click();
        for (const text of pastMembersPage.textList) {
            await expect(pastMembersPage.pageBody).toContainText(text);
        }
    });
});
