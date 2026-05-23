import nodemailer from "nodemailer";

export async function POST() {
  try {
    const otp = "0000";

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user:
            process.env.EMAIL_USER,

          pass:
            process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject:
        "Your OTP Code",

      text: `Your OTP code is: ${otp}`,
    });

    return Response.json({
      success: true,
      message:
        "OTP email sent successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message:
          "Failed to send OTP",
      },
      {
        status: 500,
      }
    );
  }
}