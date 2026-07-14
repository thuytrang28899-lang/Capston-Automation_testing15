import { Locator, Page } from "@playwright/test";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // =========================
  // Navigation
  // =========================

  async navigate(
    url: string,
    timeout: number = TimeOutConstants.TIME_OUT_LONG
  ): Promise<void> {
    await this.page.goto(url, { timeout });
  }

  async reload(
    timeout: number = TimeOutConstants.TIME_OUT_LONG
  ): Promise<void> {
    await this.page.reload({ timeout });
  }

  // =========================
  // Element Actions
  // =========================

  async click(
    locator: Locator,
    timeout: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await locator.click({ timeout });
  }

  async inputText(
    locator: Locator,
    text: string,
    timeout: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await locator.fill(text, { timeout });
  }

  async hover(
    locator: Locator,
    timeout: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await locator.hover({ timeout });
  }

  async press(
    locator: Locator,
    key: string,
    timeout: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await locator.press(key, { timeout });
  }

  async scrollIntoView(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  // =========================
  // Wait
  // =========================

  async waitForVisible(
    locator: Locator,
    timeout: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await locator.waitFor({
      state: "visible",
      timeout,
    });
  }

  async waitForHidden(
    locator: Locator,
    timeout: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {
    await locator.waitFor({
      state: "hidden",
      timeout,
    });
  }

  // =========================
  // Get Data
  // =========================

  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent()) ?? "";
  }

  async getValue(locator: Locator): Promise<string> {
    return await locator.inputValue();
  }

  async getAttribute(
    locator: Locator,
    attribute: string
  ): Promise<string | null> {
    return await locator.getAttribute(attribute);
  }

  // =========================
  // Element State
  // =========================

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async isHidden(locator: Locator): Promise<boolean> {
    return await locator.isHidden();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  async isDisabled(locator: Locator): Promise<boolean> {
    return await locator.isDisabled();
  }
}