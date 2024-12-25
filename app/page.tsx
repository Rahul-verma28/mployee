// "use client";

// import React, { useEffect, useState } from "react";
// import { Job } from "@/lib/job";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Skeleton } from "@/components/ui/skeleton";
// import { AlertCircle } from "lucide-react";
// import JobListings from "@/components/jobListings";

// export default function Page() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await fetch(`/api/jobs`, {
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           cache: "no-store",
//         });

//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }

//         const data = await res.json();
//         setJobs(data);
//       } catch (err) {
//         console.error("Error fetching jobs:", err);
//         setError("Failed to load jobs. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <main className="container mx-auto p-4 space-y-6 min-h-screen">
//       <h1 className="text-3xl font-bold">Job Listings</h1>
//       {loading ? (
//         <JobListingSkeleton />
//       ) : error ? (
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>Error</AlertTitle>
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       ) : jobs.length > 0 ? (
//         <JobListings initialJobs={jobs} />
//       ) : (
//         <Alert>
//           <AlertTitle>No Jobs Found</AlertTitle>
//           <AlertDescription>
//             We could not find any job listings at the moment. Please check back
//             later.
//           </AlertDescription>
//         </Alert>
//       )}
//     </main>
//   );
// }

// function JobListingSkeleton() {
//   return (
//     <div className="md:flex p-10">
//       <div className="space-y-8 w-[40%]">
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="flex items-center space-x-4">
//             <Skeleton className="h-12 w-12 rounded-full" />
//             <div className="space-y-2">
//               <Skeleton className="h-4 w-[250px]" />
//               <Skeleton className="h-4 w-[200px]" />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className=" space-y-8 w-[60%] h-[60vh]">
//         <Skeleton className=" rounded-full" />
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState } from "react";
// import { Job } from "@/lib/job";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Skeleton } from "@/components/ui/skeleton";
// import { AlertCircle } from "lucide-react";
// import JobListings from "@/components/jobListings";
// import Pagination from "@/components/pagination"; // Create a separate pagination component

// export default function Page() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const limit = 50; // Number of jobs per page

//   const fetchJobs = async (page: number) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(`/api/jobs?page=${page}&limit=${limit}`, {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         cache: "no-store",
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       setJobs(data.jobs);
//       setTotalPages(data.totalPages);
//       setCurrentPage(data.currentPage);
//     } catch (err) {
//       console.error("Error fetching jobs:", err);
//       setError("Failed to load jobs. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs(currentPage);
//   }, [currentPage]);

//   return (
//     <main className="container mx-auto p-4 space-y-6 min-h-screen">
//       <h1 className="text-3xl font-bold">Job Listings</h1>
//       {loading ? (
//         <JobListingSkeleton />
//       ) : error ? (
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>Error</AlertTitle>
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       ) : jobs.length > 0 ? (
//         <>
//           <JobListings initialJobs={jobs} />
//           <Pagination 
//             currentPage={currentPage} 
//             totalPages={totalPages} 
//             onPageChange={setCurrentPage} 
//           />
//         </>
//       ) : (
//         <Alert>
//           <AlertTitle>No Jobs Found</AlertTitle>
//           <AlertDescription>
//             We could not find any job listings at the moment. Please check back
//             later.
//           </AlertDescription>
//         </Alert>
//       )}
//     </main>
//   );
// }

// function JobListingSkeleton() {
//   return (
//     <div className="md:flex p-10">
//       <div className="space-y-8 w-[40%]">
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="flex items-center space-x-4">
//             <Skeleton className="h-12 w-12 rounded-full" />
//             <div className="space-y-2">
//               <Skeleton className="h-4 w-[250px]" />
//               <Skeleton className="h-4 w-[200px]" />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className=" space-y-8 w-[60%] h-[60vh]">
//         <Skeleton className=" rounded-full" />
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState } from "react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Skeleton } from "@/components/ui/skeleton";
// import { AlertCircle } from "lucide-react";
// import JobListings from "@/components/jobListings";

// export default function Page() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchJobs = async (page: number, search: string) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(`/api/jobs?page=${page}&limit=10&location=${search}`);
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       const data = await res.json();
//       setJobs(data.jobs);
//       setTotalPages(data.totalPages);
//     } catch (err) {
//       console.error("Error fetching jobs:", err);
//       setError("Failed to load jobs. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs(page, searchTerm);
//   }, [page, searchTerm]);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     setPage(1); // Reset to the first page on a new search
//   };

//   return (
//     <main className="container mx-auto p-4 space-y-6 min-h-screen">
//       <h1 className="text-3xl font-bold">Job Listings</h1>
//       <input
//         type="text"
//         placeholder="Search by location"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="border p-2 rounded"
//       />
//       {loading ? (
//         <JobListingSkeleton />
//       ) : error ? (
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>Error</AlertTitle>
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       ) : jobs.length > 0 ? (
//         <div>
//           <JobListings initialJobs={jobs} />
//           <Pagination
//             currentPage={page}
//             totalPages={totalPages}
//             onPageChange={(newPage: React.SetStateAction<number>) => setPage(newPage)}
//           />
//         </div>
//       ) : (
//         <Alert>
//           <AlertTitle>No Jobs Found</AlertTitle>
//           <AlertDescription>
//             We could not find any job listings at the moment. Please check back
//             later.
//           </AlertDescription>
//         </Alert>
//       )}
//     </main>
//   );
// }

// function JobListingSkeleton() {
//   return (
//     <div className="md:flex p-10">
//       <div className="space-y-8 w-[40%]">
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="flex items-center space-x-4">
//             <Skeleton className="h-12 w-12 rounded-full" />
//             <div className="space-y-2">
//               <Skeleton className="h-4 w-[250px]" />
//               <Skeleton className="h-4 w-[200px]" />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="space-y-8 w-[60%] h-[60vh]">
//         <Skeleton className="rounded-full" />
//       </div>
//     </div>
//   );
// }

// function Pagination({ currentPage, totalPages, onPageChange }:any) {
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
//   return (
//     <div className="flex justify-center gap-2 mt-4">
//       {pages.map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`px-4 py-2 border rounded ${
//             currentPage === page ? "bg-blue-500 text-white" : ""
//           }`}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   );
// }


"use client";

import JobListings from "@/components/jobListings";
import React from "react";

export default function Page() {
  return (
    <main className="container mx-auto p-4 space-y-6 min-h-screen">
      <h1 className="text-3xl font-bold">Job Listings</h1>
      <JobListings initialJobs={[]} />
    </main>
  );
}

