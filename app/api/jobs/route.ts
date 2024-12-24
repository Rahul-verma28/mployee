// import Job from "@/lib/models/Job";
// import { connectToDB } from "@/lib/mongoDb";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     await connectToDB();

//     if (req.method === "GET") {
//         try {
//             const { location } = req.query;

//             const query = location
//                 ? { location: { $regex: new RegExp(location as string, "i") } }
//                 : {};

//             const jobs = await Job.find(query);

//             return res.status(200).json(jobs);
//         } catch (error) {
//             console.error("Error fetching jobs:", error);
//             return res.status(500).json({ message: "Internal Server Error" });
//         }
//     } else {
//         return res.setHeader("Allow", ["GET"]).status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }


import { NextRequest, NextResponse } from "next/server";
import Job from "@/lib/models/Job";
import { connectToDB } from "@/lib/mongoDb";

export const GET = async (req: NextRequest) => {
  try {
    // Connect to the database
    await connectToDB();

    // Extract 'location' from query parameters
    const location = req.nextUrl.searchParams.get("location");

    // Define query object
    const query = location
      ? { location: { $regex: new RegExp(location, "i") } } // Case-insensitive regex search
      : {};

    // Fetch jobs from the database based on the query
    const jobs = await Job.find(query).sort({ title: "desc" });

    // Return the jobs in JSON format
    return NextResponse.json(jobs, { status: 200 });
  } catch (err) {
    console.error("[jobs_GET]", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

// Optional: Force dynamic rendering for the route
export const dynamic = "force-dynamic";
