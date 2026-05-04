import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("url");
        console.log("DB connected");
    }catch(err) {
        console.log("DB error", err);
        process.exit(1);
    }

};