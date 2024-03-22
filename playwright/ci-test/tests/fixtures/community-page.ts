import type { Page, Locator } from "@playwright/test";
import { TextList } from "./interfaces";

export class CommunityPage {
    private readonly url: string = "/community/involve/";
    public readonly pageBody: Locator;
    public readonly participateSupportLink: Locator;
    public readonly reportBugsLink: Locator;
    public readonly qgisDocumentationLink: Locator;
    public readonly translateQGISLink: Locator;
    public readonly developPluginLink: Locator;
    public readonly developQGISCoreLink: Locator;
    public readonly sustainDonateLink: Locator;
    public readonly submitButton: Locator;
    public readonly otherMethodsInfoLink: Locator;
    public readonly currencyInput: Locator;
    public readonly workflowCertificationImg: Locator;
    public readonly charterLink: Locator;
    public readonly annualGeneralMeetingsLink: Locator;
    public readonly annualReportsLink: Locator;
    public readonly financeLink: Locator;
    public readonly infrastructureLink: Locator;
    public readonly brandGuidelinesLink: Locator;
    public readonly contributorCreditsLink: Locator;
    public readonly committeeResolutionsLink: Locator;
    public readonly meetingsLink: Locator;
    public readonly goToMeetingsFirstLink: Locator;
    public readonly goToMeetingsNthLink: Locator;
    public readonly mailingListsLink: Locator;
    public readonly qgisUsersListLink: Locator;
    public readonly qgisDevelopersListLink: Locator;
    public readonly qgisCommunityTeamLink: Locator;
    public readonly qgisTranslationsLink: Locator;
    public readonly qgisProjectSteeringLink: Locator;
    public readonly qgisWebClientLink: Locator;

    public readonly textList: TextList[] = [
        {
            page: "Get involved",
            texts: [
                "Ways of Contributing ¶ Participate in Support Channels Report Bugs QGIS",
                "Participate in Support Channels ¶ User groups 🇩🇪 🇫🇷 🇪🇸",
                "Report Bugs ¶ If you",
                "QGIS Documentation ¶ Creating",
                "Translate QGIS ¶ If you’re",
                "Develop a Plugin ¶ Interested",
                "Develop QGIS Core ¶ QGIS Core",
                "Sustain & Donate ¶ We welcome",
            ],
        },
        {
            page: "Become a certified member",
            texts: [
                "Become a certified member ¶ The QGIS Certificate Program is designed to promote",
                "The QGIS Certificate Program",
                "Development/commits to QGIS Contributions to the QGIS documentation and",
                "To contact the certification",
                "You are required to provide",
                "Following an initial review,",
                "The PSC will make the final",
                "If approved you are required",
                "You can apply through this",
            ],
        },
        {
            page: "QGIS Foundation",
            texts: [
                "QGIS Foundation Giving the",
                "Giving the power of spatial",
                "Annual General Meetings Starting in 2016 (coincident with the establishment of",
                "Annual Reports Starting in",
                "Finance Please check the",
                "QGIS.org Charter QGIS.ORG is",
            ],
        },
        {
            page: "Charter",
            texts: [
                "Charter of the QGIS.ORG Association ¶ Legal status of QGIS.ORG ¶ QGIS.ORG is",
            ],
        },
        {
            page: "Annual General Meetings",
            texts: [
                "Annual General Meetings ¶ Starting in 2016 (coincident with the establishment",
            ],
        },
        {
            page: "Annual Reports",
            texts: ["Annual Reports ¶ Starting in"],
        },
        { page: "Finance", texts: ["Finance ¶ Please check the"] },
        {
            page: "Project Organisation",
            texts: ["Who’s Who ¶ QGIS as a Project"],
        },
        { page: "Infrastructure", texts: ["Infrastructure ¶ This page"] },
        {
            page: "Brand Guidelines",
            texts: [
                "QGIS Trademark and brand guidelines ¶ We’re thrilled that you want to refer to",
            ],
        },
        {
            page: "Contributor Credits",
            texts: [
                "Contributor Credits ¶ Individuals, institutions and firms who contributed code",
            ],
        },
        {
            page: "Committee Resolutions",
            texts: [
                "Committee Resolutions Committee Resolution 2019 In 2019, the Project Steering",
                "Committee Resolution 2019 In",
                "Committee Resolution 2020 In",
            ],
        },
        {
            page: "Meetings",
            texts: [
                "Meetings ¶ Since 2009 the",
                "Developer Meetings ¶ Go to",
                "Users Meetings ¶ Go to",
            ],
        },
        { page: "Mailing Lists", texts: ["Mailing Lists ¶ We"] },
    ];

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");

        this.participateSupportLink = this.page.getByRole("link", {
            name: "Participate in Support",
        });
        this.reportBugsLink = this.page.getByRole("link", {
            name: "Report Bugs",
        });
        this.qgisDocumentationLink = this.page.getByRole("link", {
            name: "QGIS Documentation",
        });
        this.translateQGISLink = this.page.getByRole("link", {
            name: "Translate QGIS",
            exact: true,
        });
        this.developPluginLink = this.page.getByRole("link", {
            name: "Develop a Plugin",
        });
        this.developQGISCoreLink = this.page.getByRole("link", {
            name: "Develop QGIS Core",
        });
        this.sustainDonateLink = this.page.getByRole("link", {
            name: "Sustain & Donate",
        });
        this.submitButton = this.page.locator("#submit-button");
        this.otherMethodsInfoLink = this.page.getByRole("link", {
            name: "Other methods, more info",
        });
        this.currencyInput = this.page.locator("#currency");
        this.workflowCertificationImg = this.page.getByRole("img", {
            name: "Workflow Certification",
        });
        this.charterLink = this.page.getByRole("link", { name: "Charter" });
        this.annualGeneralMeetingsLink = this.page.getByRole("link", {
            name: "Annual General Meetings",
        });
        this.annualReportsLink = this.page.getByRole("link", {
            name: "Annual Reports",
        });
        this.financeLink = this.page.getByRole("link", { name: "Finance" });
        this.infrastructureLink = this.page.getByRole("link", {
            name: "Infrastructure",
        });
        this.brandGuidelinesLink = this.page.getByRole("link", {
            name: "Brand Guidelines",
        });
        this.contributorCreditsLink = this.page.getByRole("link", {
            name: "Contributor Credits",
        });
        this.committeeResolutionsLink = this.page.getByRole("link", {
            name: "Committee Resolutions",
        });
        this.meetingsLink = this.page.getByRole("link", {
            name: "Meetings",
            exact: true,
        });
        (this.goToMeetingsFirstLink = this.page
            .getByRole("link", { name: "Go to meetings" })
            .first()),
            (this.goToMeetingsNthLink = this.page
                .getByRole("link", { name: "Go to meetings" })
                .nth(1));
        this.mailingListsLink = this.page.getByRole("link", {
            name: "Mailing Lists",
        });
        this.qgisUsersListLink = this.page.getByRole("link", {
            name: "QGIS Users list http://lists.",
        });
        this.qgisDevelopersListLink = this.page.getByRole("link", {
            name: "QGIS Developers list http://",
        });
        this.qgisCommunityTeamLink = this.page.getByRole("link", {
            name: "QGIS Community team http://",
        });
        this.qgisTranslationsLink = this.page.getByRole("link", {
            name: "QGIS Translations http://",
        });
        this.qgisProjectSteeringLink = this.page.getByRole("link", {
            name: "QGIS Project Steering",
        });
        this.qgisWebClientLink = this.page.getByRole("link", {
            name: "QGIS Web Client 2 http://",
        });
    }
    async goto() {
        await this.page.goto(this.url);
    }
}
