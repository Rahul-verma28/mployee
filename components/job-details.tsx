import { formatPostedDate } from "@/lib/format-date";
import { Job } from "@/lib/job";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, Briefcase } from "lucide-react";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: Readonly<JobDetailsProps>) {
  console.log(job);
  return (
    
    <div className="p-6 py-10 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">{job.title}</h2>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <Building2 className="w-4 h-4" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
        </div>
        <Button>Quick Apply</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Briefcase className="w-4 h-4" />
          <span>{job.employmentType}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{formatPostedDate(job.postedDateTime)}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Experience</h3>
        <p className="text-muted-foreground">{job.experience}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Qualifications</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            {job.experience.toUpperCase()} Experience
          </Badge>
          <Badge variant="secondary">{job.source}</Badge>
          <Badge variant="secondary">{job.country}</Badge>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Job Description</h3>
        <p className="text-muted-foreground">
          This is a <b>{job.employmentType}</b> position at <b>{job.company}</b>{" "}
          located in <b> {job.location}</b>. We are looking for candidates with{" "}
          <b>{job.experience}</b> of experience.
        </p>
      </div>

      <div className="flex gap-4">
        <Button className="flex-1">Apply Now</Button>
        <Button variant="outline" className="flex-1">
          Save Job
        </Button>
      </div>
    </div>
  );
}
