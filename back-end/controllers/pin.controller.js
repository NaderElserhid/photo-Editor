import Pin from "../models/pin.model.js";
import User from "../models/user.model.js"

// pins functions
export const getPins = async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.cursor, 10);
    const cursor = isNaN(pageNumber) ? 0 : pageNumber;
    const search = req.query.search;
    const LIMIT = 21;

    let query = {};

    if (search && search.trim() !== "") {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { tags: { $in: [search] } },
        ],
      };
    }

    const pins = await Pin.find(query)
      .limit(LIMIT)
      .skip(cursor * LIMIT);

    const hasNextPage = pins.length === LIMIT;

    res.status(200).json({
      pins,
      nextCursor: hasNextPage ? cursor + 1 : null,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


export const getPin = async (req, res) => {
  const { id } = req.params;
  const pin = await Pin.findById(id).populate(
    "user",
    "username img displayName"
  );

  console.log(pin);
  res.status(200).json(pin);
};
