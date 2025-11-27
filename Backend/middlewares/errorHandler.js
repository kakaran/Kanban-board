// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.log("err", err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    stack: err.stack ,
  });
};

export default errorHandler;
