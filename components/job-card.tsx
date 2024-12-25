import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Job } from "@/lib/job";

interface JobCardProps {
  job: Job;
  isSelected: boolean;
  onClick: () => void;
}

export default function JobCard({
  job,
  isSelected,
  onClick,
}: Readonly<JobCardProps>) {
  return (
    <Card
      className={`cursor-pointer transition-colors ${
        isSelected ? "border-primary" : ""
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-muted-foreground">{job.company}</p>
            <p className="text-sm text-muted-foreground">{job.location}</p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-muted px-2 py-1 rounded">
                {job.employmentType}
              </span>
              <span className="text-xs bg-muted px-2 py-1 rounded">
                {job.experience}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Button variant="default" size="sm">
              Quick Apply
            </Button>
            <span className="text-xs text-muted-foreground">
              {new Date(job.postedDateTime).toLocaleDateString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
