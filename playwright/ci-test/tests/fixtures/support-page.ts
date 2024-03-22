import type { Page, Locator } from "@playwright/test";

export class SupportPage {
    public readonly url: string = "/resources/support/";
    public readonly pageBody: Locator;
    public readonly textList: string[] = [
        "Support",
        "Mailing Lists",
        "QGIS has a bunch of mailing",
        "If you are going to ask",
        "StackExchange",
        "On http://gis.stackexchange.",
        "Communication channels",
        "Telegram",
        "There is a lot of user and",
        "To join: install Telegram on",
        "There is also a web version (",
        "Matrix / IRC",
        "Matrix (https://matrix.org)",
        "To use Matrix: create an",
        "To use IRC: install an IRC",
        "Facebook",
        "For Facebook users, an",
        "User Groups",
        "Local QGIS user groups are a",
        "See User Groups to read about",
        "Website",
        "The website should be used to",
        "Good luck with the",
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
    }
    async goto() {
        await this.page.goto(this.url);
    }
}

export class OtherSupportPage {
    public readonly pageBody: Locator;
    public readonly communicationChannelsLink: Locator;
    public readonly commercialSupportLink: Locator;
    public readonly commercialSupportText: Locator;
    public readonly commercialSupportSection: Locator;
    public readonly coreContributorsSection: Locator;
    public readonly stackExchangeLink: Locator;
    public readonly websiteCreationLink: Locator;
    public readonly textList: string[] = [
        "Commercial support",
        "Do you plan to use QGIS in",
        "Note ¶ we take responsibility",
        "Core contributors",
        "3liz (based in France) offers",
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.communicationChannelsLink = this.page.getByRole("link", {
            name: "Communication channels",
        });
        this.commercialSupportLink = this.page.getByRole("link", {
            name: "Commercial support",
        });
        this.commercialSupportSection = this.page.locator(
            "#commercial-support",
        );
        this.coreContributorsSection = this.page.locator("#core-contributors");
        this.stackExchangeLink = this.page.getByRole("link", {
            name: "StackExchange",
        });
        this.websiteCreationLink = this.page.getByRole("link", {
            name: "Website Creation",
        });
    }

    async navigateToCommunicationChannels() {
        await this.communicationChannelsLink.click();
    }

    async navigateToCommercialSupport() {
        await this.commercialSupportLink.click();
    }

    async navigateToStackExchange() {
        await this.stackExchangeLink.click();
    }

    async navigateToWebsiteCreation() {
        await this.websiteCreationLink.click();
    }
}
