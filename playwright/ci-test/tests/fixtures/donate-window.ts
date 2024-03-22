import type { Page, Locator } from "@playwright/test";
import { TextList } from "./interfaces";

export class FundingPage {
    public readonly pageBody: Locator;
    public readonly textList: TextList[] = [
        {
            page: "Monthly",
            texts: [
                "$ 5.00",
                "$ 10.00",
                "$ 20.00",
                "$ 50.00",
                "$ 100.00",
                "$ 250.00",
            ],
        },
        {
            page: "One-Time",
            texts: ["$ 10.00", "$ 20.00", "$ 50.00", "$ 100.00", "$ 250.00"],
        },
    ];
    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
    }
}
