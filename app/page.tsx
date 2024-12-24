'use client'

import React, { useEffect, useState } from "react"
import { Job } from "@/lib/job"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from 'lucide-react'
import JobListings from "@/components/jobListings"

export default function Page() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          cache: "no-store",
        })

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()
        setJobs(data)
      } catch (err) {
        console.error("Error fetching jobs:", err)
        setError("Failed to load jobs. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <main className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Job Listings</h1>
      {loading ? (
        <JobListingSkeleton />
      ) : error ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : jobs.length > 0 ? (
        <JobListings initialJobs={jobs} />
      ) : (
        <Alert>
          <AlertTitle>No Jobs Found</AlertTitle>
          <AlertDescription>
            We could not find any job listings at the moment. Please check back later.
          </AlertDescription>
        </Alert>
      )}
    </main>
  )
}

function JobListingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  )
}

