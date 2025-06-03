import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

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
