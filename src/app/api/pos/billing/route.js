import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(`POS APIs : Billing`, { status: 200 });
}
