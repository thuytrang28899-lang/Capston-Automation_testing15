import { test, expect } from "../../fixtures/base.fixture";

test.describe("Seat Feature", () => {

  test("TC_SEAT_001 - Select available seat", async ({
    page,
    movieDetailPage,
    bookingPage,
  }) => {

    // ==========================
    // Home
    // ==========================

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    // ==========================
    // Movie Detail
    // ==========================

    await movieDetailPage.selectRandomMovie();

    await expect(page).toHaveURL(/detail/);

    // ==========================
    // Showtime
    // ==========================

    await movieDetailPage.selectRandomShowtime();

    await expect(page).toHaveURL(/purchase/);

    // ==========================
    // Debug
    // ==========================

    console.log("Current URL:", page.url());

    // ==========================
    // Seat
    // ==========================

    const availableSeat =
      await bookingPage.getAvailableSeatCount();

    const bookedSeat =
      await bookingPage.getBookedSeatCount();

    console.log("Available Seat:", availableSeat);

    console.log("Booked Seat:", bookedSeat);

    expect(availableSeat).toBeGreaterThan(0);

    await bookingPage.selectRandomAvailableSeat();

  });

});