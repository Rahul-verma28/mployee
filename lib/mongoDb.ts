import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async (): Promise<void> => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("DB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL || "", {
            dbName: "jobs",
        });

        isConnected = true;
        console.log("Connected to DB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
