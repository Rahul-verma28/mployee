'use client';

import React, { useState, useEffect } from "react";
import { Job } from "@/lib/job";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import JobDetails from "./job-details";
import JobCard from "./job-card";
import JobPagination from "./pagination";
import { ChevronLeft, Search } from 'lucide-react';

interface JobListingsProps {
  initialJobs: Job[];
}

export default function JobListings({ initialJobs }: JobListingsProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showJobDetails, setShowJobDetails] = useState(false);

  const fetchJobs = async (page: number, search: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/jobs?page=${page}&limit=10&location=${search}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(page, searchTerm);
  }, [page, searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
    setShowJobDetails(false);
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setShowJobDetails(true);
  };

  const handleBackClick = () => {
    setShowJobDetails(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 w-full md:w-[45%]">
        <Input
          placeholder="Search by location..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full"
        />
        <Button variant="outline" size="icon" onClick={() => fetchJobs(1, searchTerm)}>
          <Search className="h-4 w-4" />
        </Button>
      </div>
      {loading ? (
        <JobListingSkeleton />
      ) : error ? (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : jobs.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`flex flex-col gap-4 ${showJobDetails ? 'hidden lg:flex' : ''}`}>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-4 pr-4">
                {jobs.map((job) => (
                  <JobCard
                    key={job.jobId}
                    job={job}
                    isSelected={selectedJob?.jobId === job.jobId}
                    onClick={() => handleJobClick(job)}
                  />
                ))}
              </div>
            </ScrollArea>
            <JobPagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => {
                setPage(newPage);
                setShowJobDetails(false);
              }}
            />
          </div>
          <div className={`bg-muted rounded-lg ${showJobDetails ? 'block' : 'hidden lg:block'}`}>
            {selectedJob ? (
              <>
                <Button
                  variant="ghost"
                  onClick={handleBackClick}
                  className="lg:hidden m-4"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Jobs
                </Button>
                <JobDetails job={selectedJob} />
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Select a job to view details
              </div>
            )}
          </div>
        </div>
      ) : (
        <Alert>
          <AlertTitle>No Jobs Found</AlertTitle>
          <AlertDescription>
            We could not find any job listings at the moment. Please check back
            later.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

function JobListingSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <Skeleton className="h-[60vh] w-full" />
      </div>
    </div>
  );
}

