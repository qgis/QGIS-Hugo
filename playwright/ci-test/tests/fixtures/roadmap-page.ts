import type { Page, Locator } from "@playwright/test";

export class RoadmapPage {
    public readonly pageBody: Locator;
    public readonly event: Locator;
    public readonly latest: Locator;
    public readonly longTermRepo: Locator;
    public readonly freeze: Locator;
    public readonly date: Locator;
    public readonly weekNumber: Locator;
    public readonly weeks: Locator;
    public readonly longTermReleaseBegin: Locator;
    public readonly regularReleaseBegin: Locator;
    public readonly featureFreezeEnd: Locator;
    public readonly pointReleaseLatest: Locator;
    public readonly extraPointRelease: Locator;
    public readonly currentlySupportedReleases: Locator;
    public readonly nextReleases: Locator;
    public readonly platform: Locator;
    public readonly location: Locator;
    public readonly windows: Locator;
    public readonly osgeo4w: Locator;
    public readonly linux: Locator;
    public readonly debianUbuntu: Locator;
    public readonly macOS: Locator;
    public readonly textList: string[] = [
        "Road Map",
        "Development phase",
        "Feature freeze",
        "Release",
        "Release schedule",
        "Schedule",
        "Event legend",
        "Location of prereleases / nightly builds",
    ];

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.event = this.page.getByRole("cell", { name: "Event" });
        this.latest = this.page.getByRole("cell", {
            name: "Latest",
            exact: true,
        });
        this.longTermRepo = this.page.getByRole("cell", {
            name: "Long-Term Repo",
        });
        this.freeze = this.page.getByRole("cell", {
            name: "Freeze",
            exact: true,
        });
        this.date = this.page.getByRole("cell", { name: "Date" });
        this.weekNumber = this.page.getByRole("cell", { name: "Week #" });
        this.weeks = this.page.getByRole("cell", { name: "Weeks" });
        this.longTermReleaseBegin = this.page.getByRole("cell", {
            name: "Long term release, begin of",
        });
        this.regularReleaseBegin = this.page.getByRole("cell", {
            name: "Regular release, begin of new",
        });
        this.featureFreezeEnd = this.page.getByRole("cell", {
            name: "Feature freeze, end of",
        });
        this.pointReleaseLatest = this.page.getByRole("cell", {
            name: "Point release of latest",
        });
        this.extraPointRelease = this.page.getByRole("cell", {
            name: "Extra Point release",
        });
        this.currentlySupportedReleases = this.page.getByRole("cell", {
            name: "currently supported releases",
        });
        this.nextReleases = this.page.getByRole("cell", {
            name: "next releases",
        });
        this.platform = this.page.getByRole("cell", { name: "Platform" });
        this.location = this.page.getByRole("cell", { name: "Location" });
        this.windows = this.page.getByRole("cell", { name: "Windows" });
        this.osgeo4w = this.page.getByRole("cell", { name: "OSGeo4W" });
        this.linux = this.page.getByRole("cell", { name: "Linux" });
        this.debianUbuntu = this.page.getByRole("cell", {
            name: "Debian/Ubuntu",
        });
        this.macOS = this.page.getByRole("cell", { name: "MacOS" });
    }
}
