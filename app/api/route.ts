// IMPORT nodemailer
const nodemailer = require("nodemailer");

// GET URL
export async function GET(req: Request) {
  return new Response("hello");
}

// POST URL
export async function POST(req: Request, res: Response) {
  const data = await req.json();

  // SMTP config
  let transporter = await nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: "info@affectionarcade.com",
      pass: "maxvscheco@2024",
    },
  });

  // send mail
  await transporter.sendMail({
    from: "info@affectionarcade.com",
    to: "info@affectionarcade.com",
    subject: "Client Request Affection Arcade",
    html: `
        <div>
            <h4>Name:</h4>
            <p>${data.full_name}</p>

            <h4>Reponse Email:</h4>
            <p>${data.email}</p>

            <h4>Message</h4>
            <p>${data.about}</p>
        </div>
    `,
  });

  // confirmation
  return new Response("email sent");
}
