import { Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class HomePage extends CommonPage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToLoginPage(): Promise<void> {
    await this.getTopBarComponent().navigateToLoginPage();
  }

  async navigateToRegisterPage(): Promise<void> {
    await this.getTopBarComponent().navigateToRegisterPage();
  }
}