import nodemailer from 'nodemailer';


const mail = "adittyabasak321@gmail.com"
const pass = "ndnggshvzleqczhn"
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // Create a transporter object
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: mail,
                pass,
            },
        });

        try {
            // Send mail with defined transport object
            const info = await transporter.sendMail({
                from: mail, // sender address
                to: mail, // replace with your email
                subject: subject, // Subject line
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
                html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`, // html body
            });

            // console.log("Message sent: %s", info.messageId);
            res.status(200).json({ message: 'Email sent', messageId: info.messageId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}