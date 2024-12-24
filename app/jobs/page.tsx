"use client";

import React, { useEffect, useState } from "react";

interface Job {
  jobId: string;
  title: string;
  location: string;
  employmentType: string;
  experience: string;
  postedDateTime: string;
  jobLink: string;
  description: string;
}

const JobPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    fetch("/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
        setFilteredJobs(data);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const location = e.target.value.toLowerCase();
    setSearchLocation(location);

    const filtered = jobs.filter((job) =>
      job.location.toLowerCase().includes(location)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel: Job List */}
      <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto">
        <input
          type="text"
          placeholder="Search by location..."
          value={searchLocation}
          onChange={handleSearch}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <ul>
          {filteredJobs.map((job) => (
            <li
              key={job.jobId}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => setSelectedJob(job)}
            >
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-sm text-gray-500">{job.employmentType}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel: Job Details */}
      <div className="w-2/3 p-4">
        {selectedJob ? (
          <>
            <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
            <p className="text-gray-600">{selectedJob.location}</p>
            <p className="text-gray-600">{selectedJob.experience}</p>
            <p className="text-gray-600">{new Date(selectedJob.postedDateTime).toLocaleDateString()}</p>
            <p className="text-gray-600">{selectedJob.employmentType}</p>
            <p className="mt-4">{selectedJob.description}</p>
            <a
              href={selectedJob.jobLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Job Posting
            </a>
          </>
        ) : (
          <p className="text-gray-500">Select a job to view details.</p>
        )}
      </div>
    </div>
  );
};

export default JobPage;
