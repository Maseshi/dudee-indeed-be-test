import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "Invalid Request",
      message: "Member count is required.",
    },
    { status: 400 }
  );
}
