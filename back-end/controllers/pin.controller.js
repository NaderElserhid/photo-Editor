import Pin from "../models/pin.model.js";

export const getPins = async (req, res) => {
  const pageNumber = parseInt(req.query.page) || 0;
  const LIMIT = 21;
  const pins = await Pin.find()
    .limit(LIMIT)
    .skip(pageNumber * LIMIT);
  const hasNextPage = pins.length === LIMIT;

  return res
    .status(200)
    .json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
};
