import jobCard from "../model/jobCard.model.js";
import handleServiceError from "../utils/handleServiceError.js";

export const jobCardCreate = async (data) => {
  try {
    let response = await jobCard.create(data);
    return response;
  } catch (error) {
    handleServiceError(error);
  }
};

export const jobCardsingleGet = async ({ jobId, selected }) => {
  try {
    let response = await jobCard.find(
      { _id: jobId, isDeleted: false },
      { ...selected }
    );
    return response;
  } catch (error) {
    handleServiceError(error);
  }
};

export const jobCardUpdate = async () => {
  try {
  } catch (error) {
    handleServiceError(error);
  }
};
export const jobCardDelete = async (jobId) => {
  try {
    let response = await jobCard.findByIdAndUpdate(
      { _id: jobId },
      { isDeleted: true }
    );
    return response;
  } catch (error) {
    handleServiceError(error);
  }
};
