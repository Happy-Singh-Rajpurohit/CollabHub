import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // secure SSL port
  secure: true,
  auth: {
    type: "login", // <-- Force Nodemailer to use LOGIN instead of PLAIN
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (to, token) => {
  try {
    console.log("💌 Using credentials:", process.env.EMAIL_USER, process.env.EMAIL_PASS ? "(Loaded)" : "(Missing)");

    const verifyLink = `${process.env.BACKEND_URL}/api/auth/verify-email?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      subject: "Verify your email",
      html: `<p>Click <a href="${verifyLink}">here</a> to verify your email.</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Verification email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending verification email:", error);
  }
};

export const sendResetPasswordEmail = async (to, token) => {
  try {
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      subject: "Reset your password",
      html: `
        <p>You requested to reset your password.</p>
        <p>Click <a href="${resetLink}">here</a> to set a new password.</p>
        <p>This link expires in 15 minutes.</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Password reset email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending password reset email:", error);
  }
};
