import { Job } from "@/lib/job";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building2, MapPin, Calendar, Briefcase, Link } from "lucide-react";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: Readonly<JobDetailsProps>) {
  console.log(job)

  return (
    <ScrollArea className="h-screen w-full">
      <div className="p-4 md:p-6 space-y-6">
        {/* Job Title and Company Info */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold">{job.title}</h2>
            <div className="flex items-center gap-2 mt-2 text-muted-foreground">
              <Building2 className="w-5 h-5" />
              <span className="font-medium">{job.company}</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">{job.location}</span>
            </div>
          </div>
          <Button variant="default" className="sm:w-32 w-full mt-3 sm:mt-0">
            Quick Apply
          </Button>
        </div>

        {/* Employment Type and Posted Date */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="w-5 h-5" />
            <span>{job.employmentType}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5" />
            <span>{new Date(job.postedDateTime).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Link className="w-5 h-5" />
            <a href={job.jobLink} target="_blank" className="text-primary-500 hover:underline">
              Apply Here
            </a>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Experience</h3>
          <p className="text-muted-foreground">{job.experience}</p>
        </div>

        {/* Qualifications */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Qualifications</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{job.experience.toUpperCase()} Experience</Badge>
            <Badge variant="outline">{job.source}</Badge>
            <Badge variant="outline">{job.country}</Badge>
          </div>
        </div>

        {/* Job Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Job Description</h3>
          <p className="text-muted-foreground">
            This is a <b>{job.employmentType}</b> position at <b>{job.company}</b> located in <b>{job.location}</b>. We are looking for candidates with <b>{job.experience}</b> of experience.
          </p>
        </div>

        {/* Apply and Save Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline" className="flex-1">
            Save Job
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}
