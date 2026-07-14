import { Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { TopBarComponent } from "./components/TopBarComponent";

export class CommonPage extends BasePage {
  private readonly topBarComponent: TopBarComponent;

  constructor(page: Page) {
    super(page);
    this.topBarComponent = new TopBarComponent(page);
  }

  public getTopBarComponent(): TopBarComponent {
    return this.topBarComponent;
  }
}