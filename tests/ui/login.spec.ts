import { test, expect } from "../../fixtures/base.fixture";
import { AccountData } from "../../test-data/account.data";
import { InvalidLoginData } from "../../test-data/invalid-login.data";

test.describe("Login Feature", () => {
  test("TC_LOGIN_001 - Login successfully", async ({
    page,
    homePage,
    registerPage,
    loginPage,
    bookingPage,
  }) => {
    const account = AccountData.generateAccount();

    console.log(account);

    // ==========================
    // Register
    // ==========================

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.navigateToRegisterPage();

    await registerPage.register(
      account.username,
      account.password,
      account.password,
      account.email,
      account.fullName,
    );

    // Verify register success
    await expect(
      page.getByRole("heading", {
        name: "Đăng ký thành công",
      }),
    ).toBeVisible();

    // Đóng popup nếu có
    await bookingPage.clickAgreeButton();

    // Chờ server lưu account
    await page.waitForTimeout(2000);

    // ==========================
    // Login
    // ==========================

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.navigateToLoginPage();

    await loginPage.login(account.username, account.password);

    // Chờ xử lý đăng nhập
    await page.waitForTimeout(3000);

    console.log("Current URL:", page.url());

    // Verify không còn ở trang login
    console.log("Current URL:", page.url());

    console.log(
      "Token:",
      await page.evaluate(() => localStorage.getItem("accessToken")),
    );
  });

  test("TC_LOGIN_002 - Login with empty data", async ({
    page,
    homePage,
    loginPage,
  }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.navigateToLoginPage();

    await loginPage.login(
      InvalidLoginData.EMPTY_DATA.username,
      InvalidLoginData.EMPTY_DATA.password,
    );
  });

  test("TC_LOGIN_003 - Login with invalid username", async ({
    page,
    homePage,
    loginPage,
  }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.navigateToLoginPage();

    await loginPage.login(
      InvalidLoginData.INVALID_USERNAME.username,
      InvalidLoginData.INVALID_USERNAME.password,
    );
  });

  test("TC_LOGIN_004 - Login with invalid password", async ({
    page,
    homePage,
    loginPage,
  }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.navigateToLoginPage();

    await loginPage.login(
      InvalidLoginData.INVALID_PASSWORD.username,
      InvalidLoginData.INVALID_PASSWORD.password,
    );
  });

  test("TC_LOGIN_005 - Login with invalid account", async ({
    page,
    homePage,
    loginPage,
  }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.navigateToLoginPage();

    await loginPage.login(
      InvalidLoginData.INVALID_ACCOUNT.username,
      InvalidLoginData.INVALID_ACCOUNT.password,
    );
  });
});
