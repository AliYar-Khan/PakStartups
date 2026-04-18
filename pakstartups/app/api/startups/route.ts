// app/api/startups/route.ts
// GET /api/startups — list/filter startups (server-side, uses firebase-admin)
// POST /api/startups — create a startup (auth required)

import { NextRequest, NextResponse } from "next/server";

// We stub with static data until Firebase Admin is configured
// To connect to Firestore: npm install firebase-admin and add server credentials

const STUB_STARTUPS = [
  { id: "1", name: "FinFlow", city: "Lahore", category: "FinTech", stage: "Growth", slug: "finflow" },
  { id: "2", name: "AgriSense", city: "Faisalabad", category: "AgriTech", stage: "MVP", slug: "agrisense" },
  { id: "3", name: "SehatLink", city: "Karachi", category: "HealthTech", stage: "Scaling", slug: "sehatlink" },
  { id: "4", name: "EduPeak", city: "Islamabad", category: "EdTech", stage: "Growth", slug: "edupeak" },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const city = searchParams.get("city");
  const stage = searchParams.get("stage");

  let results = STUB_STARTUPS;
  if (category) results = results.filter((s) => s.category === category);
  if (city) results = results.filter((s) => s.city === city);
  if (stage) results = results.filter((s) => s.stage === stage);

  return NextResponse.json({ data: results, total: results.length });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: Validate session token, write to Firestore
    // const { name, city, category, stage, desc, website } = body;
    return NextResponse.json({ success: true, id: "new-id", ...body }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
