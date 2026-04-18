// app/api/match/route.ts
// GET /api/match — browse match profiles

import { NextRequest, NextResponse } from "next/server";

const STUB_PROFILES = [
  { id: "1", fullName: "Ahmed Khan", city: "Lahore", role: "Founder", skills: ["Product", "AgriTech"] },
  { id: "2", fullName: "Sara Ahmed", city: "Karachi", role: "Tech Lead", skills: ["React Native", "FinTech"] },
  { id: "3", fullName: "Zain Malik", city: "Islamabad", role: "Student", skills: ["Python", "Logistics"] },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const role = searchParams.get("role");
  const city = searchParams.get("city");

  let results = STUB_PROFILES;
  if (role) results = results.filter((p) => p.role === role);
  if (city) results = results.filter((p) => p.city === city);

  return NextResponse.json({ data: results, total: results.length });
}
