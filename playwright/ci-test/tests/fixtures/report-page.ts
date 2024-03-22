import type { Page, Locator } from "@playwright/test";

export class ReportsPage {
    public readonly pageBody: Locator;
    public readonly certificationImage: Locator;
    public readonly ogcCertificationLink: Locator;
    public readonly performanceLink: Locator;
    public readonly securityLink: Locator;
    public readonly textList: string[] = [
        "Daily Reports",
        "OGC Certification",
        "Performance",
        "QGIS Server",
        "In order to keep an eye on",
        "WMS",
        "OGC API Features (aka WFS",
        "WFS",
        "Latest reports",
        "At the moment, two tools are",
        "The first one is MS-Perfs",
        "The second one is Graffiti,",
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.certificationImage = this.page.locator("p:nth-child(5) > img");
        this.ogcCertificationLink = this.page.getByRole("link", {
            name: "OGC Certification",
        });
        this.performanceLink = this.page.getByRole("link", {
            name: "Performance",
        });
        this.securityLink = this.page.getByRole("link", { name: "Security" });
    }
}
