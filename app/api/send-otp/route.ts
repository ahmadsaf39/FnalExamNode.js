import nodemailer from "nodemailer";

export async function POST() {
  try {
    const otp = Math.floor(
      1000 + Math.random() * 9000
    ).toString();

    console.log("Generated OTP:", otp);

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
      otp,
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