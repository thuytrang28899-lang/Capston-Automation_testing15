# 🎬 Cinema Booking Automation Testing Framework

## 📖 Overview

This repository contains my **Automation Testing Capstone Project**, developed using **Playwright** and **TypeScript**.

The project automates the main functionalities of a Cinema Booking website following the **Page Object Model (POM)** design pattern. The framework is designed to be reusable, maintainable, and easy to extend for future test scenarios.

---

## 🏗 Framework Architecture

<p align="center">
    <img src="Slide%20presentation/framework-architecture.png" width="850">
</p>

The automation framework follows the Page Object Model (POM) architecture:

```
Tests (Spec Files)
        │
        ▼
Page Objects
        │
        ▼
Common Page
        │
        ▼
Base Page
        │
        ▼
Playwright API
```

---

## 📁 Project Structure

```text
Playwright-CyberSoft
│
├── constants
│   └── TimeOutConstants.ts
│
├── fixtures
│   └── base.fixture.ts
│
├── pages
│   ├── BasePage.ts
│   ├── CommonPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   ├── MovieDetailPage.ts
│   ├── BookingPage.ts
│   ├── ProfilePage.ts
│   └── components
│       └── TopBarComponent.ts
│
├── test-data
│
├── tests
│   └── ui
│       ├── register.spec.ts
│       ├── login.spec.ts
│       ├── movie-detail.spec.ts
│       ├── showtime.spec.ts
│       ├── seat.spec.ts
│       ├── booking.spec.ts
│       └── profile.spec.ts
│
├── Slide presentation
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# 🚀 Technologies

| Technology | Description |
|------------|-------------|
| Playwright | End-to-End Automation Testing |
| TypeScript | Programming Language |
| Node.js | Runtime Environment |
| Page Object Model | Test Design Pattern |

---

# 📌 Implemented Features

### ✅ Register

- Register successfully

---

### ✅ Login

- Login successfully
- Login with empty credentials
- Login with invalid username
- Login with invalid password
- Login with invalid account

---

### ✅ Movie Detail

- Navigate to Movie Detail page

---

### ✅ Showtime

- Select available showtime

---

### ✅ Seat

- Select available seat

---

### ✅ Booking

Happy Path

- Book movie ticket successfully

Negative Scenario

- Booking without selecting any seat

---

### ✅ Profile

- View booking history after booking successfully

---

# 📊 Automation Coverage

| Feature | Status |
|----------|:------:|
| Register | ✅ |
| Login | ✅ |
| Movie Detail | ✅ |
| Showtime | ✅ |
| Seat Selection | ✅ |
| Booking | ✅ |
| Profile | ✅ |

Automation Coverage: **40%+**

---

# 📋 Test Artifacts

The framework automatically generates testing artifacts during execution.

✔ HTML Report

✔ Screenshot (when test fails)

✔ Video Recording (when test fails)

✔ Trace File (when test fails)

---

# ▶ Run Project

### Install dependencies

```bash
npm install
```

---

### Execute all tests

```bash
npx playwright test
```

---

### Execute a specific test

```bash
npx playwright test tests/ui/login.spec.ts
```

---

### Open Playwright HTML Report

```bash
npx playwright show-report
```

---

# 📷 Test Execution Result

<p align="center">
    <img src="Slide%20presentation/runtest_result.png" width="900">
</p>

---

# 🎯 Framework Highlights

- Page Object Model (POM)
- Base Page abstraction
- Common reusable methods
- Fixture Injection
- Test Data Management
- Easy Maintenance
- Easy Scalability
- Automatic HTML Report
- Screenshot on Failure
- Video Recording on Failure
- Trace on Failure

---

# 👩‍💻 Author

**Thuy Trang**

Automation Testing Capstone Project

Playwright • TypeScript • Page Object Model

---

## ⭐ Thank you for visiting this repository!
