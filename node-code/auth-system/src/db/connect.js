import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  try {

    // Prevent multiple connections
    if (isConnected) {
      console.log("DB already connected");
      return;
    }

    const con = await mongoose.connect(process.env.MONGO_URI);

    isConnected = true;

    console.log("DB Connected =>", con.connection.host);

  } catch (error) {

    console.log("DB Connection Error =>", error);

  }
};
