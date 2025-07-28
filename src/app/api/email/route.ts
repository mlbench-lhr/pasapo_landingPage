// app/api/email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Optional: parse request body if using JSON
        const body = await req.json();
        const email=body.email
        const htmltemplate = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #4CAF50;">Thank you for reaching out!</h2>
      <p>Dear ${body?.Name || 'User'},</p>
      <p>We have received your message and will get back to you shortly.</p>

      <h3>Your Message:</h3>
      <p><strong>Name:</strong> ${body?.Name || ''} ${body?.LastName || ''}</p>
      <p><strong>Email:</strong> ${body?.Email || ''}</p>
      <p><strong>Phone:</strong> ${body?.PhoneNo || ''}</p>
      <p><strong>Message:</strong> ${body?.Message || ''}</p>

      <br />
      <p style="color: #888;">Best regards,<br />The Support Team</p>
    </div>
  `
        await transporter.sendMail({
            from: `"Your Name" <${process.env.EMAIL_USER}>`,
            to: body?.Email,
            subject: body?.subject || 'Test',
            html: htmltemplate
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Email error:', error);
        return NextResponse.json(
            { message: 'Failed to send email', error: error.toString() },
            { status: 500 }
        );
    }
}
