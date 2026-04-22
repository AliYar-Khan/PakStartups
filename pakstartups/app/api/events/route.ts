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
    // Safety default for open-source deployments: keep writes disabled until
    // server-side auth/token verification is fully configured.
    if (process.env.ENABLE_PUBLIC_WRITES !== "true") {
      return NextResponse.json(
        { error: "Event creation is temporarily disabled." },
        { status: 503 }
      );
    }

    const authorization = request.headers.get("authorization") || "";
    if (!authorization.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const title = typeof body?.title === "string" ? body.title.trim() : "";
    const date = typeof body?.date === "string" ? body.date.trim() : "";
    const type = typeof body?.type === "string" ? body.type.trim() : "";
    const location = typeof body?.location === "string" ? body.location.trim() : "";

    if (!title || title.length < 5 || title.length > 200) {
      return NextResponse.json({ error: "Invalid title" }, { status: 400 });
    }
    if (!date) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }
    if (!type || type.length > 80) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
    if (!location || location.length > 200) {
      return NextResponse.json({ error: "Invalid location" }, { status: 400 });
    }

    return NextResponse.json(
      {
        success: true,
        id: "new-event-id",
        data: { title, date, type, location },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
