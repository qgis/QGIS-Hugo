import type { Page, Locator } from "@playwright/test";
import { TextList } from "./interfaces";

export class FundingPage {
    public readonly url: string = "/funding/donate/";
    public readonly pageBody: Locator;
    public readonly submitButton: Locator;
    public readonly currencyInput: Locator;
    public readonly donateButton: Locator;
    public readonly becomeSustainingMemberLink: Locator;
    public readonly sustainingMembershipDiv: Locator;
    public readonly sustainingMembershipSection: Locator;
    public readonly writeTrearurerLink: Locator;
    public readonly openSustainingMembersLink: Locator;
    public readonly textList: TextList[] = [
        {
            page: "Donate",
            texts: [
                "QGIS is developed by a team",
                "We rely on sponsorships and",
                "Donations to QGIS are tax-",
                "We use the stripe",
                "Bank transfer ¶ Use the",
                "Account name: QGIS.ORG",
                "You can use Paypal",
            ],
        },
        {
            page: "Membership",
            texts: [
                "Sustaining Membership program ¶ QGIS is an entirely Open Source project. QGIS",
                "QGIS is an entirely Open",
                "As a result, you have free",
                "€ 27,000+ ¶ Flagship Member (",
                "€ 9,000+ ¶ Large Member (e.g",
                "€ 3,000+ ¶ Medium Member (e.g",
                "€ 500+ ¶ Small Member (e.g.",
                "Public Acknowledgment ¶ All",
                "Enhanced Software Quality ¶ Your contribution aids in resolving bugs and issues",
                "Enhanced Brand Exposure ¶ Flagship, large and medium sustaining members will",
                "Featured in Software Updates ¶ Your support is highlighted in the visual",
                "Public Acknowledgment ¶ Use a",
                "Enhanced Brand Exposure ¶ Enjoy an ad-free experience in QGIS, focusing on your",
                "Reach out to the treasurer at",
                "The treasurer will gather",
                "The treasurer verifies the",
                "Membership details are",
                "Recognition: Sustaining",
                "Visibility: Members are",
                "Promotion: When appropriate,",
                "Past sustaining members are",
                "You can also make one-time payement ¶ Donations can be of any amount, via",
                "About ‘earmarked’ funding ¶ We regret that we cannot accept ‘earmarked’ funding",
                "Warning ¶ Acceptance of",
            ],
        },
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.submitButton = this.page.locator("#submit-button");
        this.currencyInput = this.page.locator("#currency");
        this.donateButton = this.page.getByRole("button", { name: "Donate" });
        this.becomeSustainingMemberLink = this.page.getByRole("link", {
            name: "Become a Sustaining Member",
        });
        this.sustainingMembershipDiv = this.page
            .locator("div")
            .filter({
                hasText:
                    "Sustaining Membership program Join our mission to enhance and promote QGIS as",
            })
            .nth(1);
        this.sustainingMembershipSection = this.page
            .locator("section")
            .filter({
                hasText:
                    "Sustaining Membership program Join our mission to enhance and promote QGIS as",
            })
            .getByRole("link");
        this.writeTrearurerLink = this.page.getByRole("link", {
            name: "Write to trearurer",
        });
        this.openSustainingMembersLink = this.page.getByRole("link", {
            name: "Open Sustaining Members",
        });
    }
    async goto() {
        await this.page.goto(this.url);
    }
}

export class MembersPage {
    public readonly flagshipHeading: Locator;
    public readonly flagshipArticle: Locator;
    public readonly largeHeading: Locator;
    public readonly largeArticle: Locator;

    constructor(public readonly page: Page) {
        this.flagshipHeading = this.page.getByRole("heading", {
            name: "Flagship",
        });
        this.flagshipArticle = this.page
            .locator("article")
            .filter({ hasText: "Felt" });
        this.largeHeading = this.page.getByRole("heading", { name: "Large" });
        this.largeArticle = this.page
            .locator("article")
            .filter({ hasText: "Land Vorarlberg" });
    }
}

export class PastMembersPage {
    public readonly pageBody: Locator;
    public readonly textList: string[] = ["Past sustaining members"];

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
    }
}
