import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class RegisterPage extends CommonPage {
  // Locators
  private readonly accountInput: Locator;
  private readonly passwordInput: Locator;
  private readonly rePasswordInput: Locator;
  private readonly emailInput: Locator;
  private readonly fullnameInput: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    super(page);

    this.accountInput = page.getByRole("textbox", {
      name: "Tài Khoản",
    });

    this.passwordInput = page.getByRole("textbox", {
      name: "Mật Khẩu",
      exact: true,
    });

    this.rePasswordInput = page.getByRole("textbox", {
      name: "Nhập lại mật khẩu",
    });

    this.emailInput = page.getByRole("textbox", {
      name: "Email",
    });

    this.fullnameInput = page.getByRole("textbox", {
      name: "Họ Tên",
    });

    this.registerButton = page.getByRole("button", {
      name: "Đăng ký",
    });
  }

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

  async enterRePasswordInput(
    rePassword: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.inputText(this.rePasswordInput, rePassword, timeOut);
  }

  async enterEmailInput(
    email: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.inputText(this.emailInput, email, timeOut);
  }

  async enterFullnameInput(
    fullname: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.inputText(this.fullnameInput, fullname, timeOut);
  }

  async clickRegisterButton(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.click(this.registerButton, timeOut);
  }

  async register(
    account: string,
    password: string,
    rePassword: string,
    email: string,
    fullname: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await this.enterAccountInput(account, timeOut);
    await this.enterPasswordInput(password, timeOut);
    await this.enterRePasswordInput(rePassword, timeOut);
    await this.enterEmailInput(email, timeOut);
    await this.enterFullnameInput(fullname, timeOut);
    await this.clickRegisterButton(timeOut);
  }
}