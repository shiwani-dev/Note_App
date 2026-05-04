import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shiwani:NfakFHZ15WNsUxlK@cluster0.yublivi.mongodb.net/Notes");
        console.log("DB connected");
    }catch(err) {
        console.log("DB error", err);
        process.exit(1);
    }

};