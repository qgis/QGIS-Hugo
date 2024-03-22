import type { Page, Locator } from "@playwright/test";

export class Header {
    public readonly banner: Locator;
    public readonly mainNavigation: Locator;
    public readonly logoLink: Locator;
    public readonly productLink: Locator;
    public readonly overviewLink: Locator;
    public readonly caseStudiesLink: Locator;
    public readonly pluginsLink: Locator;
    public readonly visualChangelogLink: Locator;
    public readonly communityLink: Locator;
    public readonly getInvolvedLink: Locator;
    public readonly certifiedMemberLink: Locator;
    public readonly qgisFoundationLink: Locator;
    public readonly projectOrganisationLink: Locator;
    public readonly membersBlogLink: Locator;
    public readonly downloadLink: Locator;
    public readonly resourcesLink: Locator;
    public readonly qgisResourcesLink: Locator;
    public readonly installationGuideLink: Locator;
    public readonly documentationLink: Locator;
    public readonly releasesLink: Locator;
    public readonly roadmapLink: Locator;
    public readonly reportsLink: Locator;
    public readonly booksLink: Locator;
    public readonly supportLink: Locator;
    public readonly blogLink: Locator;
    public readonly donateLink: Locator;
    public readonly searchInput: Locator;

    constructor(public readonly page: Page) {
        this.banner = this.page.getByRole("banner");
        this.mainNavigation = this.page.getByLabel("main navigation");
        this.logoLink = this.mainNavigation.getByRole("link").first();
        this.productLink = this.mainNavigation.getByText("Product");
        this.overviewLink = this.mainNavigation.getByRole("link", {
            name: "Overview",
        });
        this.caseStudiesLink = this.mainNavigation.getByRole("link", {
            name: "Case studies",
        });
        this.pluginsLink = this.mainNavigation.getByRole("link", {
            name: "Plugins",
        });
        this.visualChangelogLink = this.mainNavigation.getByRole("link", {
            name: "Visual Changelogs",
        });
        this.communityLink = this.mainNavigation.getByText("Community");
        this.getInvolvedLink = this.mainNavigation.getByRole("link", {
            name: "Get involved",
        });
        this.certifiedMemberLink = this.mainNavigation.getByRole("link", {
            name: "Become a Certified Member",
        });
        this.qgisFoundationLink = this.mainNavigation.getByRole("link", {
            name: "QGIS Foundation",
        });
        this.projectOrganisationLink = this.mainNavigation.getByRole("link", {
            name: "Project Organisation",
        });
        this.membersBlogLink = this.mainNavigation.getByRole("link", {
            name: "Members Blog",
        });
        this.downloadLink = this.mainNavigation.getByRole("link", {
            name: "Download",
        });
        this.resourcesLink = this.mainNavigation.getByText("Resources", {
            exact: true,
        });
        this.qgisResourcesLink = this.mainNavigation.getByRole("link", {
            name: "QGIS Resources",
        });
        this.installationGuideLink = this.mainNavigation.getByRole("link", {
            name: "Installation Guide",
        });
        this.documentationLink = this.mainNavigation.getByRole("link", {
            name: "Documentation",
        });
        this.releasesLink = this.mainNavigation.getByRole("link", {
            name: "Releases",
        });
        this.roadmapLink = this.mainNavigation.getByRole("link", {
            name: "Roadmap",
        });
        this.reportsLink = this.mainNavigation.getByRole("link", {
            name: "Reports",
        });
        this.booksLink = this.mainNavigation.getByRole("link", {
            name: "Books",
        });
        this.supportLink = this.mainNavigation.getByRole("link", {
            name: "Support",
        });
        this.blogLink = this.mainNavigation.getByRole("link", { name: "Blog" });
        this.donateLink = this.mainNavigation.getByRole("link", {
            name: "Donate",
        });
        this.searchInput = this.page.getByPlaceholder("Search");
    }
}
