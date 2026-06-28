import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Black Wren Digital Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New inquiry from ${name} — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service</td>
              <td style="padding: 8px 0;">${service}</td>
            </tr>
          </table>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <h3 style="color: #374151;">Message</h3>
          <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="font-size: 12px; color: #9ca3af;">
            Sent via the Black Wren Digital contact form. Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
