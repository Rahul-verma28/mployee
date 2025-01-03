export interface Job {
  jobId: number;
  title: string;
  company: string;
  location: string;
  jobLink: string;
  employmentType: string;
  experience: string;
  source: string;
  country: string;
  postedDateTime: Date; // Use Date instead of string
  companyImageUrl: string;
  minExp: number;
  maxExp: number;
}