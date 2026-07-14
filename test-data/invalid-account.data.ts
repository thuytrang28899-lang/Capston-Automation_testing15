export class InvalidAccountData {
  static readonly EMPTY_DATA = {
    username: "",
    password: "",
    rePassword: "",
    fullName: "",
    email: "",
  };

  static readonly INVALID_EMAIL = {
    username: "test123",
    password: "123456",
    rePassword: "123456",
    fullName: "Test User",
    email: "abcgmail.com",
  };

  static readonly SHORT_PASSWORD = {
    username: "test123",
    password: "12345",
    rePassword: "12345",
    fullName: "Test User",
    email: "test@gmail.com",
  };

  static readonly PASSWORD_NOT_MATCH = {
    username: "test123",
    password: "123456",
    rePassword: "654321",
    fullName: "Test User",
    email: "test@gmail.com",
  };
}