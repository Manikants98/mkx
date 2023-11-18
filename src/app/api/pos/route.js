import { NextResponse } from "next/server";

export async function GET() {
  const posAPIs = {
    Dasboard: "api/pos/dashboard",
    Stock: "api/pos/stock",
    Billing: "api/pos/billing",
    Customers: "api/pos/customers",
    Discount: "api/pos/discount",
    Settings: "api/pos/settings",
  };

  return NextResponse.json({ project: "POS APIs", posAPIs }, { status: 200 });
}
