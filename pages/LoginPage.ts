import { Locator, Page } from "@playwright/test";
import { TimeOutConstants } from "../constants/TimeOutConstants";
import { CommonPage } from "./CommonPage";

export class LoginPage extends CommonPage {
  // Locators
  private readonly accountInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    this.accountInput = page.getByRole("textbox", {
      name: "Tài khoản",
    });

    this.passwordInput = page.getByRole("textbox", {
      name: "Mật khẩu",
    });

    this.loginButton = page.getByRole("button", {
      name: "Đăng nhập",
    });
  }

  // Actions
  async enterAccountInput(
    account: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.inputText(this.accountInput, account, timeOut);
  }

  async enterPasswordInput(
    password: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.inputText(this.passwordInput, password, timeOut);
  }

  async clickLoginButton(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.click(this.loginButton, timeOut);
  }

  async login(
    account: string,
    password: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.enterAccountInput(account, timeOut);
    await this.enterPasswordInput(password, timeOut);
    await this.clickLoginButton(timeOut);
  }
}