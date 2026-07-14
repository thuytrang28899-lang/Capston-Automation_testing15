import { test, expect } from "../../fixtures/base.fixture";
import { AccountData } from "../../test-data/account.data";
import { InvalidAccountData } from "../../test-data/invalid-account.data";

test.describe("Register Feature", () => {

  test.beforeEach(async ({ page, homePage }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.getTopBarComponent().navigateToRegisterPage();
  });

  test("TC_REGISTER_001 - Register successfully", async ({
  page,
  homePage,
  registerPage,
  loginPage,
  }) => {

    const account = AccountData.generateAccount();

    await registerPage.register(
      account.username,
      account.password,
      account.password,
      account.email,
      account.fullName,
    );

    const successLbl = page.getByRole("heading", {
      name: "Đăng ký thành công",
    });

    await expect(successLbl).toBeVisible();
  });

  test("TC_REGISTER_002 - Register with empty data", async ({
    registerPage,
  }) => {

    await registerPage.register(
      InvalidAccountData.EMPTY_DATA.username,
      InvalidAccountData.EMPTY_DATA.password,
      InvalidAccountData.EMPTY_DATA.rePassword,
      InvalidAccountData.EMPTY_DATA.email,
      InvalidAccountData.EMPTY_DATA.fullName,
    );

  });

  test("TC_REGISTER_003 - Register with invalid email", async ({
    registerPage,
  }) => {

    await registerPage.register(
      InvalidAccountData.INVALID_EMAIL.username,
      InvalidAccountData.INVALID_EMAIL.password,
      InvalidAccountData.INVALID_EMAIL.rePassword,
      InvalidAccountData.INVALID_EMAIL.email,
      InvalidAccountData.INVALID_EMAIL.fullName,
    );

  });

  test("TC_REGISTER_004 - Register with short password", async ({
    registerPage,
  }) => {

    await registerPage.register(
      InvalidAccountData.SHORT_PASSWORD.username,
      InvalidAccountData.SHORT_PASSWORD.password,
      InvalidAccountData.SHORT_PASSWORD.rePassword,
      InvalidAccountData.SHORT_PASSWORD.email,
      InvalidAccountData.SHORT_PASSWORD.fullName,
    );

  });

  test("TC_REGISTER_005 - Register with password not match", async ({
    registerPage,
  }) => {

    await registerPage.register(
      InvalidAccountData.PASSWORD_NOT_MATCH.username,
      InvalidAccountData.PASSWORD_NOT_MATCH.password,
      InvalidAccountData.PASSWORD_NOT_MATCH.rePassword,
      InvalidAccountData.PASSWORD_NOT_MATCH.email,
      InvalidAccountData.PASSWORD_NOT_MATCH.fullName,
    );

  });

});