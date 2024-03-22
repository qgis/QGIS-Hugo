import type { Page, Locator } from "@playwright/test";

export class DownloadPage {
    public readonly url: string = "/";
    public readonly beforeDownloadText: Locator;
    public readonly submitButton: Locator;
    public readonly otherMethodsLink: Locator;
    public readonly currencyInput: Locator;
    public readonly skipDownloadButton: Locator;
    public readonly beforeDownloadHeading: Locator;
    public readonly otherPlatformsHeading: Locator;

    constructor(public readonly page: Page) {
        this.beforeDownloadText = this.page.getByText(
            "Before download starts ¶ QGIS",
        );
        this.submitButton = this.page.locator("#submit-button");
        this.otherMethodsLink = this.page.getByRole("link", {
            name: "Other methods, more info",
        });
        this.currencyInput = this.page.locator("#currency");
        this.skipDownloadButton = this.page.getByRole("button", {
            name: "Skip it and go to download",
        });
        this.beforeDownloadHeading = this.page.getByRole("heading", {
            name: "Download QGIS for your",
        });
        this.otherPlatformsHeading = this.page.getByRole("heading", {
            name: "Other platforms",
        });
    }
}
