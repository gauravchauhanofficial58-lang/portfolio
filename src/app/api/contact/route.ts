import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 6) {
      return NextResponse.json(
        { error: "Please share a brief message (at least 6 characters)." },
        { status: 400 }
      );
    }

    // In production, this can forward to Resend, Telegram, or Discord webhook if configured.
    console.log(`[Contact Form Transmission] From: ${name.trim()} <${email.trim()}>`);
    console.log(`[Message Content]: ${message.trim()}`);

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully. Thank you for connecting with Gaurav!",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
