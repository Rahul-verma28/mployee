import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// MongoDB connection URI
const MONGODB_URI = "mongodb://localhost:27017/jobs";

// Define the Job schema and model
const jobSchema = new mongoose.Schema({
    jobId: Number,
    title: String,
    company: String,
    location: String,
    jobLink: String,
    employmentType: String,
    experience: String,
    source: String,
    country: String,
    postedDateTime: Date,
    companyImageUrl: String,
    minExp: Number,
    maxExp: Number,
});

const Job = mongoose.model("Job", jobSchema);

// Function to import JSON data
const importData = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI, {
            dbName: "jobs",
        });
        console.log("Connected to MongoDB");

        // Read JSON file
        const filePath = path.resolve("C:/Users/Rahul28/Downloads/Mployee.meTaskData.json");
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        // Insert data into MongoDB
        await Job.insertMany(jsonData);
        console.log("Data successfully imported!");

        process.exit();
    } catch (error) {
        console.error("Error importing data:", error);
        process.exit(1);
    }
};

importData();
