import type { Page, Locator } from "@playwright/test";

export class BooksPage {
    public readonly pageBody: Locator;
    public readonly contactLink: Locator;
    public readonly textList: string[] = [
        "Books ¶ This page lists books",
        "This page lists books",
        "Please write to psc@qgis.org",
        "Note: Books order is newest",
        "Books",
        "English",
        "Discover QGIS",
        "QGIS for Hydrological Applications - Second Edition",
        "Land Use Cover Datasets and Validation Tools. Validation Practices with QGIS",
        "Introduction to QGIS",
        "QGIS for Hydrological applications",
        "Chinese",
        "Dutch",
        "French",
        "Greek",
        "Japanese",
        "Polish",
        "Turkish",
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.contactLink = this.page.getByRole("link", {
            name: "psc@qgis.org",
        });
    }
}
