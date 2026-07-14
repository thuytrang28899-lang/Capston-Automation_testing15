import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TimeOutConstants } from "../../constants/TimeOutConstants";

export class TopBarComponent extends BasePage {
  // Locators
  private readonly lnkRegister: Locator;
  private readonly lnkLogin: Locator;

  constructor(page: Page) {
    super(page);

    this.lnkRegister = page.getByRole("link", {
      name: "Đăng Ký",
    });

    this.lnkLogin = page.getByRole("link", {
      name: "Đăng Nhập",
    });
  }

  // Navigation
  async navigateToRegisterPage(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.click(this.lnkRegister, timeOut);
  }

  async navigateToLoginPage(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.click(this.lnkLogin, timeOut);
  }
}