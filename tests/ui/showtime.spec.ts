import { test, expect } from "../../fixtures/base.fixture";

test.describe("Showtime Feature", () => {

  test("TC_SHOWTIME_001 - Select random showtime", async ({
    page,
    movieDetailPage,
  }) => {

    // Home
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    // Chọn phim
    await movieDetailPage.selectRandomMovie();

    // Verify vào trang Detail
    await expect(page).toHaveURL(/detail/);

    // Chọn suất chiếu
    await movieDetailPage.selectRandomShowtime();

    // Verify sang trang Purchase
    await expect(page).toHaveURL(/purchase/);

  });

});