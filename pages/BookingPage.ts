import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class BookingPage extends CommonPage {

  // ==========================
  // Locators
  // ==========================

  // Tất cả button trên trang Purchase
  private readonly seats: Locator;

  // Button ĐẶT VÉ
  private readonly btnBookTicket: Locator;

  // Popup thành công
  private readonly txtBookingSuccess: Locator;

  // Button Đồng ý
  private readonly btnAgree: Locator;

  constructor(page: Page) {
    super(page);

    this.seats = page.locator("button[type='button']");

    this.btnBookTicket = page.getByRole("button", {
      name: "ĐẶT VÉ",
    });

    this.txtBookingSuccess = page.getByText("Đặt vé thành công");

    this.btnAgree = page.getByRole("button", {
      name: "Đồng ý",
    });
  }

  // ==========================
  // Seat
  // ==========================

  async getAvailableSeatCount(): Promise<number> {

    // Chờ trang Purchase render button
    await this.page.waitForLoadState("domcontentloaded");

    await this.seats.first().waitFor({
      state: "attached",
      timeout: TimeOutConstants.TIME_OUT_LONG,
    });

    const total = await this.seats.count();

    console.log("Total Button:", total);

    let available = 0;

    for (let i = 0; i < total; i++) {

      const seat = this.seats.nth(i);

      if (
        await seat.isVisible() &&
        await seat.isEnabled()
      ) {
        available++;
      }

    }

    return available;

  }

  async getBookedSeatCount(): Promise<number> {

    const total = await this.seats.count();

    let booked = 0;

    for (let i = 0; i < total; i++) {

      const seat = this.seats.nth(i);

      if (await seat.isDisabled()) {
        booked++;
      }

    }

    return booked;

  }

  async selectRandomAvailableSeat(
    timeout = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {

    const total = await this.seats.count();

    const availableSeats: Locator[] = [];

    for (let i = 0; i < total; i++) {

      const seat = this.seats.nth(i);

      if (
        await seat.isVisible() &&
        await seat.isEnabled()
      ) {
        availableSeats.push(seat);
      }

    }

    console.log("Available Seat:", availableSeats.length);

    if (availableSeats.length === 0) {
      throw new Error("Không còn ghế để chọn.");
    }

    const random = Math.floor(
      Math.random() * availableSeats.length
    );

    await this.scrollIntoView(
      availableSeats[random]
    );

    await this.click(
      availableSeats[random],
      timeout
    );

  }

  // ==========================
  // Booking
  // ==========================

  async clickBookTicketButton(
    timeout = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {

    await this.click(
      this.btnBookTicket,
      timeout
    );

  }

  async booking(
    timeout = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {

    await this.selectRandomAvailableSeat(timeout);

    await this.clickBookTicketButton(timeout);

  }

  // ==========================
  // Verify
  // ==========================

  getBookingSuccessMessage(): Locator {
    return this.txtBookingSuccess;
  }

  async clickAgreeButton(
    timeout = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {

    if (await this.btnAgree.isVisible()) {
      await this.click(
        this.btnAgree,
        timeout
      );
    }

  }

}