import type { Page, Locator } from "@playwright/test";

export class Footer {
    public readonly banner: Locator;
    private readonly liElement: Locator;
    public readonly productList: Locator;
    public readonly communityList: Locator;
    public readonly resourcesList: Locator;
    public readonly fundingList: Locator;
    public readonly downloadLink: Locator;
    public readonly overviewLink: Locator;
    public readonly caseStudiesLink: Locator;
    public readonly pluginsLink: Locator;
    public readonly visualChangelogsLink: Locator;
    public readonly getInvolvedLink: Locator;
    public readonly becomeCertifiedMemberLink: Locator;
    public readonly qgisFoundationLink: Locator;
    public readonly projectOrganisationLink: Locator;
    public readonly localUserGroupsLink: Locator;
    public readonly membersBlogsList: Locator;
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
    public readonly membershipList: Locator;
    public readonly diversityStatementLink: Locator;
    public readonly codeOfConductLink: Locator;
    public readonly environmentalPolicyLink: Locator;
    public readonly licenseLink: Locator;
    public readonly visualStyleGuideLink: Locator;
    public readonly goodiesLink: Locator;
    public readonly logoImage: Locator;
    public readonly facebookLink: Locator;
    public readonly twitterLink: Locator;
    public readonly youtubeLink: Locator;
    public readonly mapstodonLink: Locator;
    public readonly ghLink: Locator;
    public readonly mailLink: Locator;

    constructor(public readonly page: Page) {
        this.banner = this.page.getByRole("contentinfo");
        this.liElement = this.page.locator("li");
        this.productList = this.liElement.filter({ hasText: "Product" });
        this.communityList = this.liElement.filter({ hasText: "Community" });
        this.resourcesList = this.liElement.filter({ hasText: "Resources" });
        this.fundingList = this.liElement.filter({ hasText: "Funding" });
        this.downloadLink = this.banner
            .locator("div")
            .filter({ hasText: "Download" })
            .nth(2);
        this.overviewLink = this.banner.getByRole("link", { name: "Overview" });
        this.caseStudiesLink = this.banner.getByRole("link", {
            name: "Case studies",
        });
        this.pluginsLink = this.banner.getByRole("link", { name: "Plugins" });
        this.visualChangelogsLink = this.banner.getByRole("link", {
            name: "Visual Changelogs",
        });
        this.getInvolvedLink = this.banner.getByRole("link", {
            name: "Get involved",
        });
        this.becomeCertifiedMemberLink = this.page.getByRole("link", {
            name: "Become a certified member",
            exact: true,
        });
        this.qgisFoundationLink = this.banner.getByRole("link", {
            name: "QGIS Foundation",
        });
        this.projectOrganisationLink = this.banner.getByRole("link", {
            name: "Project Organisation",
        });
        this.localUserGroupsLink = this.banner.getByRole("link", {
            name: "Local User Groups",
        });
        this.membersBlogsList = this.liElement.filter({
            hasText: "Members Blogs",
        });
        this.qgisResourcesLink = this.page.getByRole("link", {
            name: "QGIS resources",
            exact: true,
        });
        this.installationGuideLink = this.liElement.filter({
            hasText: "Installation guide",
        });
        this.documentationLink = this.banner.getByRole("link", {
            name: "Documentation",
        });
        this.releasesLink = this.banner.getByRole("link", { name: "Releases" });
        this.roadmapLink = this.banner.getByRole("link", { name: "Roadmap" });
        this.reportsLink = this.banner.getByRole("link", { name: "Reports" });
        this.booksLink = this.banner.getByRole("link", { name: "Books" });
        this.supportLink = this.banner.getByRole("link", { name: "Support" });
        this.blogLink = this.banner.getByRole("link", {
            name: "Blog",
            exact: true,
        });
        this.donateLink = this.banner.getByRole("link", { name: "Donate" });
        this.membershipList = this.liElement.filter({ hasText: "Membership" });
        this.diversityStatementLink = this.page.getByRole("link", {
            name: "Diversity statement",
        });
        this.codeOfConductLink = this.page.getByRole("link", {
            name: "Code of conduct",
        });
        this.environmentalPolicyLink = this.page.getByRole("link", {
            name: "Environmental policy",
        });
        this.licenseLink = this.page.getByRole("link", { name: "License" });
        this.visualStyleGuideLink = this.page.getByRole("link", {
            name: "Visual Style Guide",
        });
        this.goodiesLink = this.page.getByRole("link", { name: "Goodies" });
        this.logoImage = this.page.getByRole("img", { name: "Logo" });
        this.facebookLink = this.page.getByRole("link", { name: "" });
        this.twitterLink = this.page.getByRole("link", { name: "" });
        this.youtubeLink = this.page.getByRole("link", { name: "" });
        this.mapstodonLink = this.page
            .locator("div:nth-child(2) > div:nth-child(2) > a:nth-child(4)")
            .first();
        this.ghLink = this.page.getByRole("link", { name: "" });
        this.mailLink = this.page.getByRole("link", { name: "" });
    }
}
