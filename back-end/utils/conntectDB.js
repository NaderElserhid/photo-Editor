import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MANGO_URL);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
export default connectDB;
