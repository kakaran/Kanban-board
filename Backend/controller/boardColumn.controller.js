import { boardColumnCreate, boardColumnsWithJobCardsGet } from "../services/boardColumn.service.js";
import { success, unauthorized } from "../utils/responseHandler.js";


export const boardColumnCreateController = async (req, res, next) => {
  try {
    let bodyData = req.body;

    let response = await boardColumnCreate(bodyData);

    if (!response) {
      return await unauthorized(res);
    }

    await success(res, "Board Column Created Successfully", {});
  } catch (error) {
    next(error);
  }
};

export const boardColumnGetController = async (req, res, next) => {
  try {
    let response = await boardColumnsWithJobCardsGet();

    if (!response) {
      return await unauthorized(res);
    }

    await success(res, "Board Column Fetched Successfully", response);
  } catch (error) {
    next(error);
  }
};
