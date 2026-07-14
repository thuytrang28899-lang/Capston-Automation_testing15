import { test, expect } from "../../fixtures/base.fixture";
import { AccountData } from "../../test-data/account.data";

test.describe("Booking Feature", () => {

  test("TC_BOOKING_001 - Booking successfully", async ({
    page,
    homePage,
    registerPage,
    loginPage,
    movieDetailPage,
    bookingPage,
  }) => {

    // ==========================
    // Generate Account
    // ==========================

    const account = AccountData.generateAccount();

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

    await expect(
      page.getByRole("heading", {
        name: "Đăng ký thành công",
      })
    ).toBeVisible();

    await bookingPage.clickAgreeButton();

    await page.waitForTimeout(3000);

    // ==========================
    // Login
    // ==========================

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.navigateToLoginPage();

    await loginPage.login(
      account.username,
      account.password,
    );

    await page.waitForTimeout(3000);

    // ==========================
    // Booking
    // ==========================

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await movieDetailPage.selectRandomMovie();

    await expect(page).toHaveURL(/detail/);

    await movieDetailPage.selectRandomShowtime();

    await expect(page).toHaveURL(/purchase/);

    expect(
      await bookingPage.getAvailableSeatCount()
    ).toBeGreaterThan(0);

    await bookingPage.booking();

    await expect(
      bookingPage.getBookingSuccessMessage()
    ).toBeVisible();

    await bookingPage.clickAgreeButton();

  });

  test("TC_BOOKING_002 - Cannot book without selecting seat", async ({
    page,
    homePage,
    registerPage,
    loginPage,
    movieDetailPage,
    bookingPage,
  }) => {

    // ==========================
    // Generate Account
    // ==========================

    const account = AccountData.generateAccount();

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

    await expect(
      page.getByRole("heading", {
        name: "Đăng ký thành công",
      })
    ).toBeVisible();

    await bookingPage.clickAgreeButton();

    await page.waitForTimeout(3000);

    // ==========================
    // Login
    // ==========================

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await homePage.navigateToLoginPage();

    await loginPage.login(
      account.username,
      account.password,
    );

    await page.waitForTimeout(3000);

    // ==========================
    // Navigate Booking Page
    // ==========================

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await movieDetailPage.selectRandomMovie();

    await expect(page).toHaveURL(/detail/);

    await movieDetailPage.selectRandomShowtime();

    await expect(page).toHaveURL(/purchase/);

    // ==========================
    // Không chọn ghế
    // ==========================

    await bookingPage.clickBookTicketButton();

    // ==========================
    // Verify
    // ==========================

    await expect(
      bookingPage.getBookingSuccessMessage()
    ).not.toBeVisible();

  });

});