// 'use client'

// import { useState } from "react"
// import { Job } from "@/lib/job"
// import { Input } from "@/components/ui/input"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import JobDetails from "./job-details"
// import JobCard from "./job-card"

// interface JobListingsProps {
//   initialJobs: Job[]
// }

// export default function JobListings({ initialJobs }: JobListingsProps) {
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null)
//   const [locationSearch, setLocationSearch] = useState("")
  
//   const filteredJobs = initialJobs.filter(job => 
//     job.location.toLowerCase().includes(locationSearch.toLowerCase())
//   )

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div className="flex flex-col gap-4">
//         <Input
//           placeholder="Search by location..."
//           value={locationSearch}
//           onChange={(e) => setLocationSearch(e.target.value)}
//           className="w-full"
//         />
//         <ScrollArea className="h-[calc(100vh-200px)]">
//           <div className="space-y-4 pr-4">
//             {filteredJobs.map((job) => (
//               <JobCard
//                 key={job.jobId}
//                 job={job}
//                 isSelected={selectedJob?.jobId === job.jobId}
//                 onClick={() => setSelectedJob(job)}
//               />
//             ))}
//           </div>
//         </ScrollArea>
//       </div>
//       <div className="h-[calc(100vh-200px)] bg-muted rounded-lg">
//         {selectedJob ? (
//           <JobDetails job={selectedJob} />
//         ) : (
//           <div className="flex items-center justify-center h-full text-muted-foreground">
//             Select a job to view details
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }


'use client';

import { useState } from "react";
import { Job } from "@/lib/job";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import JobDetails from "./job-details";
import JobCard from "./job-card";

interface JobListingsProps {
  initialJobs: Job[];
}

export default function JobListings({ initialJobs }: JobListingsProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [locationSearch, setLocationSearch] = useState("");

  const filteredJobs = initialJobs.filter((job) =>
    job.location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Search by location..."
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
          className="w-full"
        />
        <ScrollArea className="h-[calc(100vh-100px)]">
          <div className="space-y-4 pr-4">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.jobId}
                job={job}
                isSelected={selectedJob?.jobId === job.jobId}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="h-[calc(100vh-50px)] bg-muted rounded-lg">
        {selectedJob ? (
          <JobDetails job={selectedJob} />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a job to view details
          </div>
        )}
      </div>
    </div>
  );
}
