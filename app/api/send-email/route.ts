import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { enquiryType, name, companyName, phone, email, message } = await req.json();
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO_USER, 
      subject: `New Inquiry from ${name}`,
      text: `
        Enquiry Type: ${enquiryType}
        Name: ${name}
        Company: ${companyName}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Failed to send email", error: error.message }, { status: 500 });
  }
}
