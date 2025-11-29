import apiInstance from "./apiInstance.js"

export const apiRequest = async (
  module,
  version,
  endpoint,
  method = "GET",
  data = {}
) => {
  try {
    const url = `/${module}/${version}/${endpoint}`;
    const config = {
      method,
      url,
      data,
    };
    const response = await apiInstance(config);
    return response.data;
  } catch (error) {
    const backendMessage =
      error.response?.data?.message || "Something went wrong";
    console.error(
      `Error in ${method.toUpperCase()} request to ${endpoint}:`,
      error
    );
    throw new Error(backendMessage);
  }
};
