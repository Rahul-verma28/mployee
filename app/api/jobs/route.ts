import { NextRequest, NextResponse } from "next/server";
import Job from "@/lib/models/Job";
import { connectToDB } from "@/lib/mongoDb";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();

    const location = req.nextUrl.searchParams.get("location") || "";
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);

    const query = location
      ? { location: { $regex: new RegExp(location, "i") } }
      : {};

    const skip = (page - 1) * limit;

    const [jobs, totalCount] = await Promise.all([
      Job.find(query).sort({ postedDateTime: "desc" }).skip(skip).limit(limit),
      Job.countDocuments(query),
    ]);

    return NextResponse.json({ jobs, totalCount, page, totalPages: Math.ceil(totalCount / limit) }, { status: 200 });
  } catch (err) {
    console.error("[jobs_GET]", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
