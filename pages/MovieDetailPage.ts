import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class MovieDetailPage extends CommonPage {

  // ==========================
  // Locators
  // ==========================

  private readonly buyTicketLinks: Locator;
  private readonly showTimeLinks: Locator;

  constructor(page: Page) {
    super(page);

    // Link MUA VÉ ở Home
    this.buyTicketLinks = page.locator("a[href*='/detail/']");

    // Link suất chiếu ở Detail
    this.showTimeLinks = page.locator("a[href*='/purchase/']");
  }

  // ==========================
  // Chọn phim ngẫu nhiên
  // ==========================

  async selectRandomMovie(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {

    await this.waitForVisible(
      this.buyTicketLinks.first(),
      timeOut
    );

    const count = await this.buyTicketLinks.count();

    const visibleMovies: Locator[] = [];

    for (let i = 0; i < count; i++) {

      const movie = this.buyTicketLinks.nth(i);

      if (await movie.isVisible()) {
        visibleMovies.push(movie);
      }
    }

    if (visibleMovies.length === 0) {
      throw new Error("Không tìm thấy phim đang hiển thị.");
    }

    const random = Math.floor(
      Math.random() * visibleMovies.length
    );

    await this.scrollIntoView(
      visibleMovies[random]
    );

    await this.click(
      visibleMovies[random],
      timeOut
    );
  }

  // ==========================
  // Chọn suất chiếu ngẫu nhiên
  // ==========================

  async selectRandomShowtime(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ): Promise<void> {

    await this.waitForVisible(
      this.showTimeLinks.first(),
      timeOut
    );

    const count = await this.showTimeLinks.count();

    if (count === 0) {
      throw new Error("Không tìm thấy suất chiếu.");
    }

    const random = Math.floor(
      Math.random() * count
    );

    await this.scrollIntoView(
      this.showTimeLinks.nth(random)
    );

    await this.click(
      this.showTimeLinks.nth(random),
      timeOut
    );
  }

}