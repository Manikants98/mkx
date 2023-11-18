import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(`POS APIs : Dashboard`, { status: 200 });
}
