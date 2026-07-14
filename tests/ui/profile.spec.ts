import { test, expect } from "../../fixtures/base.fixture";
import { AccountData } from "../../test-data/account.data";

test.describe("Profile Feature", () => {

  test("TC_PROFILE_001 - View booking history", async ({
    page,
    homePage,
    registerPage,
    loginPage,
    movieDetailPage,
    bookingPage,
    profilePage,
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
    // Booking Ticket
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

    // ==========================
    // Profile
    // ==========================

    await profilePage.navigateToProfile();

    await expect(page).toHaveURL(/account/);

    await profilePage.scrollToBookingHistory();

    // ==========================
    // Verify Booking History
    // ==========================

    await expect(
      profilePage.getBookingHistoryTitle()
    ).toBeVisible();

    expect(
      await profilePage.getBookingHistoryCount()
    ).toBeGreaterThan(0);

  });

});