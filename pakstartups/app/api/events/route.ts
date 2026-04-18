// app/api/events/route.ts
// GET /api/events — list events

import { NextRequest, NextResponse } from "next/server";

const STUB_EVENTS = [
  { id: "1", title: "Friday Founder Pitch Night #24", date: "2024-04-25", type: "Pitching", location: "Online", attending: 287 },
  { id: "2", title: "SaaS Growth Masterclass", date: "2024-05-02", type: "Workshop", location: "LUMS, Lahore", attending: 142 },
  { id: "3", title: "Founder Coffee: Karachi", date: "2024-05-05", type: "Meetup", location: "Coffee Wagera, Karachi", attending: 45 },
];

export async function GET(_request: NextRequest) {
  return NextResponse.json({ data: STUB_EVENTS, total: STUB_EVENTS.length });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({ success: true, id: "new-event-id", ...body }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
