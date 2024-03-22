import type { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    private readonly url: string = "/";
    public readonly pageBody: Locator;
    public readonly freeOpenSourceSpatialDiv: Locator;
    public readonly downloadLink: Locator;
    public readonly spatialWithoutCompromiseHeading: Locator;
    public readonly createMapsHeading: Locator;
    public readonly editLayersHeading: Locator;
    public readonly processAndAnalyzeHeading: Locator;
    public readonly shareMapsHeading: Locator;
    public readonly exploreQGISLink: Locator;
    public readonly powerOfOpenSourceHeading: Locator;
    public readonly getInvolvedLink: Locator;
    public readonly freeAndOpenSourceHeading: Locator;
    public readonly freeDownloadLink: Locator;
    public readonly youTubeVideoThumbnailOverlayImage: Locator;
    public readonly startUsingQGISHeading: Locator;
    public readonly goToMaterialsLink: Locator;
    public readonly qgisSupportersHeading: Locator;
    public readonly supportersGridDiv: Locator;
    public readonly addYourLogoHereText: Locator;
    public readonly silverPartnerText: Locator;
    public readonly createMapsImg: Locator;
    public readonly editLayersImg: Locator;
    public readonly processImg: Locator;
    public readonly shareMapsImg: Locator;
    public readonly communityImg: Locator;
    public readonly changeLogVideo: Locator;
    public readonly otherSupporters: Locator;

    public readonly textList: string[] = [
        "Free and open source",
        "Giving the power of spatial",
        "Available on Windows, Mac,",
        "Explore QGIS's exceptional",
        "Class-leading cartography",
        "Experience QGIS' extensive",
        "Professional map production",
        "Use the intuitive layout",
        "Powerful reporting tools",
        "Create atlasses and reports",
        "Harness the unmatched",
        "Exceptional digitizing",
        "Craft and edit points, lines",
        "Advanced construction tools",
        "Build geometries with curves",
        "Highly customizable forms",
        "Create user-friendly forms",
        "Benefit from state-of-the art",
        "Comprehensive analysis toolset",
        "Uncover insights from your",
        "Automated analysis workflows",
        "Visually combine analysis",
        "Extensible analysis",
        "Explore a diverse ecosystem",
        "QGIS provides an equal",
        "Industry-leading format",
        "Conquer data integration",
        "Standards and interoperability",
        "Amplify your impact by",
        "Publish your work",
        "Extend QGIS to the cloud and",
        "Our community development",
        "Join our annual international",
        "Find local user groups and",
        "Learn how people around the",
        "QGIS is a public project",
        "For that reason QGIS is Free",
        "Quick-start tutorials",
        "Live demos",
        "Up-to-date documentation",
    ];

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.freeOpenSourceSpatialDiv = this.page
            .locator("div")
            .filter({ hasText: "Free and open source Spatial" })
            .first();
        this.downloadLink = this.page
            .locator("section")
            .filter({ hasText: "Free and open source Spatial" })
            .getByRole("link");
        this.spatialWithoutCompromiseHeading = this.page.getByRole("heading", {
            name: "Spatial without compromise",
        });
        this.createMapsHeading = this.page.getByRole("heading", {
            name: "Create maps",
        });
        this.editLayersHeading = this.page.getByRole("heading", {
            name: "Edit layers",
        });
        this.processAndAnalyzeHeading = this.page.getByRole("heading", {
            name: "Process and analyze",
        });
        this.shareMapsHeading = this.page.getByRole("heading", {
            name: "Share maps",
        });
        this.exploreQGISLink = this.page.getByRole("link", {
            name: "Explore QGIS",
        });
        this.powerOfOpenSourceHeading = this.page.getByRole("heading", {
            name: "👋 The power of open source",
        });
        this.getInvolvedLink = this.page
            .getByRole("link", { name: "Get involved" })
            .first();
        this.freeAndOpenSourceHeading = this.page.getByRole("heading", {
            name: "Free and open source",
        });
        this.freeDownloadLink = this.page.getByRole("link", {
            name: "Free download",
        });
        this.youTubeVideoThumbnailOverlayImage = this.page
            .frameLocator('iframe[title="YouTube video player"]')
            .locator(".ytp-cued-thumbnail-overlay-image");
        this.startUsingQGISHeading = this.page.getByRole("heading", {
            name: "Start using QGIS 🚀",
        });
        this.goToMaterialsLink = this.page.getByRole("link", {
            name: "Go to materials",
        });
        this.qgisSupportersHeading = this.page.getByRole("heading", {
            name: "QGIS supporters",
        });
        this.addYourLogoHereText = this.page
            .locator("div")
            .filter({ hasText: "Add your logo here?" })
            .nth(2);
        this.silverPartnerText = this.page
            .locator("div")
            .filter({ hasText: "Silver partner" })
            .nth(2);
        this.supportersGridDiv = this.page
            .locator(".supporters-grid > div:nth-child(3)")
            .first();
        this.createMapsImg = this.page.locator(".deco-block-1 > img");
        this.editLayersImg = this.page.locator(".deco-block-2 > img");
        this.processImg = this.page.locator(".deco-block-3 > img");
        this.shareMapsImg = this.page.locator(".deco-block-4 > img");
        this.communityImg = this.page.locator(
            ".explore > .columns > div > figure > img",
        );
        this.changeLogVideo = this.page
            .frameLocator('iframe[title="YouTube video player"]')
            .locator(".ytp-cued-thumbnail-overlay-image");
        this.otherSupporters = this.page
            .locator(".container > div:nth-child(3)")
            .first();
    }

    async goto() {
        await this.page.goto(this.url);
    }
}
