import mongoose from "mongoose";

const connectDb = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Mongodb`.bgBlack.white);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgBlack.white);
  }
};

export default connectDb;
