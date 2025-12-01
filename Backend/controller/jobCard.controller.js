import { jobCardCreate } from "../services/jobCard.service.js";
import { success, unauthorized } from "../utils/responseHandler.js";

export const jobCardCreateController = async (req, res, next) => {
  try {
    let bodyData = req.body;

    let response = await jobCardCreate(bodyData);

    if (!response) {
      return await unauthorized(res);
    }

    await success(res, "Job Card Created Successfully", {});
  } catch (error) {
    next(error);
  }
};

export const jobCardGetController = async (req, res, next) => {
  try {
    let bodyData = req.body;

    let response = await jobCardsingleGet(bodyData);

    if (!response) {
      return await unauthorized(res);
    }

    await success(res, "Job Card Fetched Successfully", response);
  } catch (error) {
    next(error);
  }
};

export const jobCardUpdateController = async (req, res, next) => {
  try {
    let bodyData = req.body;

    let response = await jobCardUpdate(bodyData);
    if (!response) {
      return await unauthorized(res);
    }

    await success(res, "Job Card Updated Successfully", {});
  } catch (error) {
    next(error);
  }
};

export const jobCardDeleteController = async (req, res, next) => {
  try {
    let bodyData = req.body;

    let response = await jobCardDelete(bodyData);
    if (!response) {
      return await unauthorized(res);
    }

    await success(res, "Job Card Deleted Successfully", {});
  } catch (error) {
    next(error);
  }
};
