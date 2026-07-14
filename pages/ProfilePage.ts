import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class ProfilePage extends CommonPage {
  // ==========================
  // Update Profile
  // ==========================

  private readonly txtAccount: Locator;
  private readonly txtPassword: Locator;
  private readonly txtFullName: Locator;
  private readonly txtEmail: Locator;
  private readonly txtPhone: Locator;
  private readonly cboUserType: Locator;
  private readonly btnUpdate: Locator;

  // ==========================
  // Booking History
  // ==========================

  private readonly btnAvatar: Locator;
  private readonly txtBookingHistory: Locator;
  private readonly bookingItems: Locator;

  constructor(page: Page) {
    super(page);

    // ==========================
    // Update Profile
    // ==========================

    this.txtAccount = page.getByRole("textbox", {
      name: "Tài Khoản",
    });

    this.txtPassword = page.getByRole("textbox", {
      name: "Mật Khẩu",
      exact: true,
    });

    this.txtFullName = page.getByRole("textbox", {
      name: "Họ Tên",
    });

    this.txtEmail = page.getByRole("textbox", {
      name: "Email",
    });

    this.txtPhone = page.getByRole("textbox", {
      name: "Số điện thoại",
    });

    this.cboUserType = page.getByRole("combobox");

    this.btnUpdate = page.getByRole("button", {
      name: "CẬP NHẬT",
    });

    // ==========================
    // Booking History
    // ==========================

    this.btnAvatar = page.locator("a[href='/account']");

    this.txtBookingHistory = page.getByText("Lịch sử đặt vé");

    this.bookingItems = page.locator("text=Tên phim:");
  }

  // ==================================================
  // Update Profile
  // ==================================================

  async enterAccount(
    account: string,
    timeout = TimeOutConstants.TIME_OUT_DEFAULT,
  ): Promise<void> {
    await this.inputText(this.txtAccount, account, timeout);
  }

  async enterPassword(
    password: string,
    timeout = TimeOutConstants.TIME_OUT_DEFAULT,
  ): Promise<void> {
    await this.inputText(this.txtPassword, password, timeout);
  }

  async enterFullName(
    fullName: string,
    timeout = TimeOutConstants.TIME_OUT_DEFAULT,
  ): Promise<void> {
    await this.inputText(this.txtFullName, fullName, timeout);
  }

  async enterEmail(
    email: string,
    timeout = TimeOutConstants.TIME_OUT_DEFAULT,
  ): Promise<void> {
    await this.inputText(this.txtEmail, email, timeout);
  }

  async enterPhone(
    phone: string,
    timeout = TimeOutConstants.TIME_OUT_DEFAULT,
  ): Promise<void> {
    await this.inputText(this.txtPhone, phone, timeout);
  }

  async clickUpdateButton(
    timeout = TimeOutConstants.TIME_OUT_DEFAULT,
  ): Promise<void> {
    await this.click(this.btnUpdate, timeout);
  }

  async updateProfile(
    account: string,
    password: string,
    fullName: string,
    email: string,
    phone: string,
  ): Promise<void> {
    await this.enterAccount(account);
    await this.enterPassword(password);
    await this.enterFullName(fullName);
    await this.enterEmail(email);
    await this.enterPhone(phone);

    await this.clickUpdateButton();
  }

  // ==================================================
  // Booking History
  // ==================================================

  async navigateToProfile(
    timeout = TimeOutConstants.TIME_OUT_DEFAULT,
  ): Promise<void> {
    await this.click(this.btnAvatar, timeout);

    await this.page.waitForLoadState("networkidle");
  }

  async scrollToBookingHistory(): Promise<void> {
    // Chờ page render xong
    await this.page.waitForTimeout(1000);

    // Scroll xuống cuối trang
    await this.page.evaluate(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    });

    await this.page.waitForTimeout(1000);
  }

  getBookingHistoryTitle(): Locator {
    return this.txtBookingHistory;
  }

  async getBookingHistoryCount(): Promise<number> {
    return await this.bookingItems.count();
  }
}
