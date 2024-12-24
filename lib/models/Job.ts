import { Document, Schema, model, models } from "mongoose";

export interface IJob extends Document {
  jobId: number;
  title: string;
  company: string;
  location: string;
  jobLink: string;
  employmentType: string;
  experience: string;
  source: string;
  country: string;
  postedDateTime: Date;
  companyImageUrl: string;
  minExp: number;
  maxExp: number;
}

const JobSchema = new Schema<IJob>(
  {
    jobId: { type: Number, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    jobLink: { type: String, required: true },
    employmentType: { type: String, required: true },
    experience: { type: String, required: true },
    source: { type: String, required: true },
    country: { type: String, required: true },
    postedDateTime: { type: Date, required: true },
    companyImageUrl: { type: String, required: true },
    minExp: { type: Number, required: true },
    maxExp: { type: Number, required: true },
  },
  { timestamps: true }
);

export default models.Job || model<IJob>("Job", JobSchema);
