export class AccountData {
  static generateAccount() {
    const account = crypto.randomUUID();

    return {
      username: account,
      password: "testing15_playwright",
      fullName: "Testing playwright",
      email: `${account}@gmail.com`,
    };
  }
}