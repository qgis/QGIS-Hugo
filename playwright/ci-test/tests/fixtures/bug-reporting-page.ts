import type { Page, Locator } from "@playwright/test";

export class BugReportingPage {
    public readonly pageBody: Locator;
    public readonly bugReportingLink: Locator;
    public readonly bugPlaceFoundCell: Locator;
    public readonly bugReportIssueCell: Locator;
    public readonly qgisDesktopCell: Locator;
    public readonly qgisGitHubLink: Locator;
    public readonly qgisWebsiteCell: Locator;
    public readonly qgisWebsiteGitHubLink: Locator;
    public readonly qgisDocumentationCell: Locator;
    public readonly qgisDocumentationGitHubLink: Locator;
    public readonly cppAPICell: Locator;
    public readonly cppAPIGitHubLink: Locator;
    public readonly pyQGISAPICell: Locator;
    public readonly pyQGISAPIGitHubLink: Locator;
    public readonly externalPluginsCell: Locator;
    public readonly authorRepositoryCell: Locator;
    public readonly textList: string[] = [
        "Bugs, Features and Issues ¶ QGIS is a largely volunteer driven project, and is",
        "QGIS is a largely volunteer",
        "Each part of the QGIS Project",
        "For help and questions,",
        "QGIS applications (QGIS",
        "Before filing an issue,",
        "When you’re are logged in, a",
        "Before sending the report,",
        "If you have a crash it might",
        "On Linux QGIS automatically",
        "QGIS died on signal 11Could",
        "In that case you should",
        "If you cannot reproduce the",
        "On some distributions the",
        "To produce a backtrace from",
        "The nightly build in OSGeo4W",
        "QGIS project provides an",
        "The main sources of these",
        "To get started, first Create",
        "Then, choose the appropriate",
        "https://github.com/qgis/QGIS-Documentation/issues for QGIS documentation",
        "https://github.com/qgis/QGIS-Website/issues for the web site",
        "Check if the issue you’d like",
        "Most of the plugins in QGIS",
        "For any plugin available in",
        "If no information is",
        "For other plugins, we have no",
        "In addition to issue report,",
        "https://github.com/qgis/QGIS for QGIS Desktop or QGIS Server applications",
        "https://github.com/qgis/QGIS-Website for the web site at https://qgis.org",
        "https://github.com/qgis/QGIS-Documentation for the documentation available at",
        "You can find a few guidelines",
        "Bugs, Features and Issues",
        "Where to report?",
        "Reporting issues on QGIS applications",
        "Before reporting an issue",
        "Creating a backtrace",
        "Log output on Windows",
        "Reporting issues on QGIS web site or documentation",
        "Reporting plugin issues",
        "Submitting a Patch to QGIS projects",
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.bugReportingLink = this.page.getByRole("link", {
            name: "Bug Reporting",
        });
        this.bugPlaceFoundCell = this.page.getByRole("cell", {
            name: "Place you found the bug or",
        });
        this.bugReportIssueCell = this.page.getByRole("cell", {
            name: "Place to report the issue",
        });
        this.qgisDesktopCell = this.page.getByRole("cell", {
            name: "Applications (QGIS Desktop,",
        });
        this.qgisGitHubLink = this.page
            .getByRole("cell", {
                name: "https://github.com/qgis/QGIS/",
            })
            .first();
        this.qgisWebsiteCell = this.page.getByRole("cell", {
            name: "QGIS Website (https://qgis.",
        });
        this.qgisWebsiteGitHubLink = this.page.getByRole("cell", {
            name: "https://github.com/qgis/QGIS-Website/issues",
        });
        this.qgisDocumentationCell = this.page.getByRole("cell", {
            name: "QGIS Documentation (https://",
        });
        this.qgisDocumentationGitHubLink = this.page.getByRole("cell", {
            name: "https://github.com/qgis/QGIS-Documentation/issues",
        });
        this.cppAPICell = this.page.getByRole("cell", {
            name: "C++ API (https://qgis.org/api",
        });
        this.cppAPIGitHubLink = this.page
            .getByRole("cell", {
                name: "https://github.com/qgis/QGIS/",
            })
            .first();
        this.pyQGISAPICell = this.page.getByRole("cell", {
            name: "PyQGIS API (https://qgis.org/",
        });
        this.pyQGISAPIGitHubLink = this.page.getByRole("cell", {
            name: "https://github.com/qgis/QGIS/issues (for contents) and https://github.com/qgis/",
        });
        this.externalPluginsCell = this.page.getByRole("cell", {
            name: "External plugins",
        });
        this.authorRepositoryCell = this.page.getByRole("cell", {
            name: "The author repository set in",
        });
    }
}
