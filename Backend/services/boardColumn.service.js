import boardColumn from "../model/boardColumn.model.js";
import handleServiceError from "../utils/handleServiceError.js";

export const boardColumnCreate = async (data) => {
  try {
    let response = await boardColumn({ ...data }).save();
    return response;
  } catch (error) {
    handleServiceError(error);
  }
};

export const boardColumnsWithJobCardsGet = async () => {
  try {
   let response = await db.columns.aggregate([
      {
        $sort: { order: 1 },
      },
      {
        $lookup: {
          from: "jobCards",
          localField: "_id",
          foreignField: "columnId",
          as: "cards",
        },
      },
      {
        $addFields: {
          cards: {
            $map: {
              input: "$cardOrder",
              as: "id",
              in: {
                $first: {
                  $filter: {
                    input: "$cards",
                    cond: { $eq: ["$$this._id", "$$id"] },
                  },
                },
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          cards: 1,
        },
      },
    ]);
    console.log(response)
    return response
  } catch (error) {
    handleServiceError(error);
  }
};

export const boardColumnGets = async () => {
  try {
    let response = await boardColumn.find();
    return response;
  } catch (error) {
    handleServiceError(error);
  }
};

export const boardColumnUpdate = async () => {
  try {
  } catch (error) {
    handleServiceError(error);
  }
};
export const boardColumnDelete = async () => {
  try {
  } catch (error) {
    handleServiceError(error);
  }
};
