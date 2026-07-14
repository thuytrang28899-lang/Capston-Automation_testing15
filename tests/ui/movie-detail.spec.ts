import { test, expect } from "../../fixtures/base.fixture";

test.describe("Movie Detail Feature", () => {

  test("TC_MOVIE_001 - Navigate to movie detail page", async ({
    page,
    movieDetailPage,
  }) => {

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    // Chỉ chờ nút MUA VÉ xuất hiện
    await movieDetailPage.selectRandomMovie();

    await expect(page).toHaveURL(/detail/);

  });

});