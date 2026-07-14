export class InvalidLoginData {
  static readonly EMPTY_DATA = {
    username: "",
    password: "",
  };

  static readonly INVALID_USERNAME = {
    username: "abcxyz123",
    password: "testing15_playwright",
  };

  static readonly INVALID_PASSWORD = {
    username: "YOUR_USERNAME",
    password: "123456",
  };

  static readonly INVALID_ACCOUNT = {
    username: "abcxyz123",
    password: "abcxyz123",
  };
}