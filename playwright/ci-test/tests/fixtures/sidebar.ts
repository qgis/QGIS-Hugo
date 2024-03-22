import type { Page, Locator } from "@playwright/test";

export class Sidebar {
    public readonly sidebar: Locator;
    public readonly productLink: Locator;
    public readonly overviewLink: Locator;
    public readonly caseStudiesLink: Locator;
    public readonly pluginsLink: Locator;
    public readonly visualChangelogsLink: Locator;
    public readonly communityLink: Locator;
    public readonly getInvolvedLink: Locator;
    public readonly becomeCertifiedMemberLink: Locator;
    public readonly qgisFoundationLink: Locator;
    public readonly projectOrganisationLink: Locator;
    public readonly membersBlogsLink: Locator;
    public readonly fundingLink: Locator;
    public readonly downloadLink: Locator;
    public readonly resourcesLink: Locator;
    public readonly qgisResourcesLink: Locator;
    public readonly membershipLink: Locator;
    public readonly installationGuideLink: Locator;
    public readonly documentationLink: Locator;
    public readonly releasesLink: Locator;
    public readonly roadmapLink: Locator;
    public readonly reportsLink: Locator;
    public readonly booksLink: Locator;
    public readonly supportLink: Locator;
    public readonly membersLink: Locator;
    public readonly pastMembersLink: Locator;

    constructor(public readonly page: Page) {
        this.sidebar = this.page.locator("#sidebar");
        this.productLink = this.sidebar.getByRole("link", {
            name: "Product",
        });
        this.overviewLink = this.sidebar.getByRole("link", {
            name: "Overview",
        });
        this.caseStudiesLink = this.sidebar.getByRole("link", {
            name: "Case studies",
        });
        this.pluginsLink = this.sidebar.getByRole("link", {
            name: "Plugins",
        });
        this.visualChangelogsLink = this.sidebar.getByRole("link", {
            name: "Visual Changelogs",
        });
        this.communityLink = this.sidebar.getByRole("link", {
            name: "Community",
        });
        this.getInvolvedLink = this.sidebar.getByRole("link", {
            name: "Get involved",
        });
        this.becomeCertifiedMemberLink = this.sidebar.getByRole("link", {
            name: "Become a certified member",
        });
        this.qgisFoundationLink = this.sidebar.getByRole("link", {
            name: "QGIS Foundation",
        });
        this.projectOrganisationLink = this.sidebar.getByRole("link", {
            name: "Project Organisation",
        });
        this.membersBlogsLink = this.sidebar.getByRole("link", {
            name: "Members Blogs",
        });
        this.fundingLink = this.sidebar.getByRole("link", {
            name: "Funding",
        });
        this.downloadLink = this.sidebar.getByRole("link", {
            name: "Download",
        });
        this.resourcesLink = this.sidebar.getByRole("link", {
            name: "Resources",
            exact: true,
        });
        this.qgisResourcesLink = this.sidebar.getByRole("link", {
            name: "QGIS resources",
        });

        this.membershipLink = this.sidebar.getByRole("link", {
            name: "Membership",
        });

        this.installationGuideLink = this.sidebar.getByRole("link", {
            name: "Installation guide",
        });

        this.documentationLink = this.sidebar.getByRole("link", {
            name: "Documentation",
        });

        this.releasesLink = this.sidebar.getByRole("link", {
            name: "Releases",
            exact: true,
        });

        this.roadmapLink = this.sidebar.getByRole("link", {
            name: "Roadmap",
            exact: true,
        });

        this.reportsLink = this.sidebar.getByRole("link", {
            name: "Reports",
            exact: true,
        });

        this.booksLink = this.sidebar.getByRole("link", {
            name: "Books",
            exact: true,
        });

        this.supportLink = this.sidebar.getByRole("link", {
            name: "Support",
            exact: true,
        });

        this.membersLink = this.sidebar.getByRole("link", {
            name: "Members",
            exact: true,
        });

        this.pastMembersLink = this.sidebar.getByRole("link", {
            name: "Past Members",
            exact: true,
        });
    }
}
