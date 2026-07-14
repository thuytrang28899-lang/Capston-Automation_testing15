import { test as base, expect } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { MovieDetailPage } from "../pages/MovieDetailPage";
import { BookingPage } from "../pages/BookingPage";
import { ProfilePage } from "../pages/ProfilePage";

type MyFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  movieDetailPage: MovieDetailPage;
  bookingPage: BookingPage;
  profilePage: ProfilePage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  movieDetailPage: async ({ page }, use) => {
    await use(new MovieDetailPage(page));
  },

  bookingPage: async ({ page }, use) => {
    await use(new BookingPage(page));
  },

  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
});

export { expect };