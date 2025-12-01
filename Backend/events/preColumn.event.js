import {
  boardColumnCreate,
  boardColumnGets,
} from "../services/boardColumn.service.js";
import ApiError from "../utils/apiError.js";

let preColumnsList = ["Saved", "Applied", "Interviewing", "Offer", "Rejected"];

export const preColumnsCreate = async () => {
  try {
    let getColumns = await boardColumnGets();

    if (getColumns.length === 0) {
      for (let column of preColumnsList) {
        await boardColumnCreate({ title: column });
      }
      return;
    }

    for (let column of preColumnsList) {
      let isExisted = getColumns.find(
        (todo) => todo.title.toLowerCase() === column.toLowerCase()
      );
      if (!isExisted) {
        await boardColumnCreate({ title: column });
      }
    }
    return;
  } catch (error) {
    new ApiError(500, error.message);
  }
};
