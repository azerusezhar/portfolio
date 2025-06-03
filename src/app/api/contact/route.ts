import { NextResponse } from "next/server";
import { Resend } from "resend";

// Add a fallback for the API key to prevent build failures
// You'll still need to set the actual API key in your production environment
const apiKey = process.env.RESEND_API_KEY || "re_placeholder_replace_in_production";
const resend = new Resend(apiKey);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Check if we have a valid API key before sending
    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ Resend API Key is missing. Email sending is disabled.");
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 503 }
      );
    }

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: "azerus.ezhar6@smk.belajar.id",
      subject: `New Message from ${name}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!", response });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 });
  }
}
