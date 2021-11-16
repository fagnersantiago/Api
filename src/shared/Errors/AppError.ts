export default class AppError {
  public readonly message: String;
  public readonly statusCode: Number;

  constructor(message: String, status = 400) {
    this.message = message;
    this.statusCode = status;
  }
}
