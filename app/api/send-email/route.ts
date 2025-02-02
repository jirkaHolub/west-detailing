import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'mail.webglobe.cz', // Replace with your SMTP server
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'holub@nejlepsikomedie.cz', // Replace with your email
      pass: 'Poklop12', // Replace with your email password
    },
  });

  // Email options
  const mailOptions = {
    from: 'holub@nejlepsikomedie.cz', // Use the authenticated email address
    to: email,
    subject: 'WD - vyplněný formulář',
    text: `Zdar Teeckej, \n${name} ti vyplnil formulář tak na to koukni.\n\n Píše: \n ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error); // Log the error details
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}