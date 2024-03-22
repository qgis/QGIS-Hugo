import type { Page, Locator } from "@playwright/test";

export class ReleasesPage {
    public readonly pageBody: Locator;
    public readonly textList: string[] = [
        "Previous releases of QGIS are",
        "More older releases are",
        "Plugins for QGIS are also",
        "Both QGIS and QGIS server are",
        "From build tests (github",
        "See Unit testing",
        "See OGC conformance testing",
        "Recent tests output can be",
        "List of Releases",
        "Tests"
    ];
    public readonly listOfReleases: Locator;
    public readonly listOfReleasesLink: Locator;
    public readonly testsLink: Locator;
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.listOfReleasesLink = this.page.getByRole("link", { name: "List of releases" });
        this.testsLink = this.page.getByRole("link", { name: "Tests" });
    }
}
