import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { data, error } = await resend.emails.send({
      from: "contact <onboarding@resend.dev>",
      to: ["sebinsebzz2002@gmail.com"],
      subject: `New message from ${body.email}`,
      html: `<p> First Name: ${body.firstName} </p> <p> Last Name: ${body.lastName} </p> <p> Email: ${body.email} </p> <p> Message: ${body.message} </p>`,
    });

    if (error) {
      return new NextResponse(error.message, { status: 500 });
    }

    return new NextResponse("Email sent successfully", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
