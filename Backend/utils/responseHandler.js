const sendResponse = async (res, statusCode, success, message, data = null) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};

const unauthorized = async (res, message = "Unauthorized") => {
  return sendResponse(res, 401, false, message);
};

const success = async (res, message = "Success", data = {}) => {
  return sendResponse(res, 200, true, message, data);
};

const badRequest = async (res, message = "Bad Request") => {
  return sendResponse(res, 400, false, message);
};

const notFound = async (res, message = "Not Found") => {
  return sendResponse(res, 404, false, message);
};

const conflict = async (res, message = "Conflict: Data already exists") => {
  return sendResponse(res, 409, false, message);
};

export { sendResponse, unauthorized, success, badRequest, notFound, conflict };
