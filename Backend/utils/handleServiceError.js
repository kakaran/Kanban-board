import ApiError from "./apiError.js";

const handleServiceError = (err, defaultMessage = "Something went wrong") => {
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    throw new ApiError(422, messages.join(", "));
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    throw new ApiError(409, `${field} already exists`);
  }

  throw new ApiError(err.statusCode || 500, err.message || defaultMessage);
};

export default handleServiceError;
