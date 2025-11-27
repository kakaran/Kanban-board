class ApiError extends Error {
  constructor(statusCode, message) {
    console.log("error", statusCode, message);
    super(message); // Set the error message
    this.statusCode = statusCode; // Custom property for HTTP status
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
