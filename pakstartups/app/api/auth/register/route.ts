// app/api/auth/register/route.ts
// POST /api/auth/register — creates a Firebase user, returns session

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password, fullName } = await request.json();

    if (!email || !password || !fullName) {
      return NextResponse.json(
        { error: "email, password and fullName are required" },
        { status: 400 }
      );
    }

    // NOTE: Client-side Firebase auth is handled by lib/firebase/auth.ts
    // This route can be used for server-side registration flows (e.g., admin-created accounts)
    // For client-side flows, call registerWithEmail() directly from components

    return NextResponse.json({
      message: "Use client-side Firebase auth for registration. See lib/firebase/auth.ts",
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
