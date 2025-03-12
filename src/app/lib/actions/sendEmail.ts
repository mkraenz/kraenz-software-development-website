"use server";

import { redirect } from "next/navigation";
import * as nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { z } from "zod";

const formattedDatetime = () => {
  const [dateAndHour, min, _rest] = new Date().toISOString().split(":");
  const [data, hour] = dateAndHour.split("T");
  return `${data} ${hour}:${min} GMT`;
};

const EnvVarSchema = z.object({
  SMTP_USERNAME: z.string().nonempty(),
  SMTP_PASSWORD: z.string().nonempty(),
  SMTP_HOST: z.string().nonempty(),
  SMTP_PORT: z.preprocess((x) => Number(x), z.number().int()),
  MY_OWN_RECEIVER_EMAIL_ADDRESS: z.string().email().nonempty(),
});

const ContactFormSchema = z.object({
  name: z.string().trim().nonempty(),
  company: z.string().trim().nonempty(),
  email: z.string().trim().email(),
  message: z.string().trim().nullable(),
});
type Contact = z.infer<typeof ContactFormSchema>;

const env = EnvVarSchema.parse({
  // explicitly writing each property instead of just passing process.env because nextjs does static string substitution for env vars
  SMTP_USERNAME: process.env.SMTP_USERNAME,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  MY_OWN_RECEIVER_EMAIL_ADDRESS: process.env.MY_OWN_RECEIVER_EMAIL_ADDRESS,
});

const transporter = nodemailer.createTransport({
  auth: {
    user: env.SMTP_USERNAME,
    pass: env.SMTP_PASSWORD,
  },
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  tls: {
    rejectUnauthorized: true,
    minVersion: "TLSv1.2",
  },
  secure: true, // true for port 465, false for other ports
} as SMTPTransport.Options);

export default async function sendEmail(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  const data = ContactFormSchema.parse(rawFormData);
  console.log("Valid contact request received", rawFormData);

  try {
    await sendEmailToMeAndConfirmationToContact(data);
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
  // redirect can't be inside try catch https://nextjs.org/docs/app/building-your-application/routing/redirecting#redirect-function "redirect internally throws an error so it should be called outside of try/catch blocks."
  redirect("/thank-you");
}

const sendEmailToMeAndConfirmationToContact = async (contact: Contact) => {
  const selfEmailPromise = transporter.sendMail({
    from: '"Mirco Kraenz" <software@kraenz.eu>',
    to: env.MY_OWN_RECEIVER_EMAIL_ADDRESS,
    subject: `[kraenz.eu] New Contact request from ${contact.name} at ${formattedDatetime()}`,
    text: `From: ${contact.name}\nCompany: ${contact.company}\nEmail: ${contact.email}\nMessage: ${contact.message ?? "No message"}`,
    html: `Hey Mirco,<br/>There has been a new contact request via kraenz.eu.<br/><br/>From: ${contact.name}<br/>Company: ${contact.company}<br/>Email: ${contact.email}<br/>Message: ${contact.message ?? "No message"}.`,
  });
  const confirmationEmailPromise = transporter.sendMail({
    from: '"Mirco Kraenz" <software@kraenz.eu>',
    to: contact.email,
    subject: "Request confirmation: Thank you for reaching out!",
    text: `Hi ${contact.name}, Nice to meet you. This is to confirm that your contact request was received. I will get back to you within the next 24 hours. So please stay tuned! :) Best, Mirco Kraenz - Full Stack Engineer - Available for Contract Work`,
    html: `Hi ${contact.name},<br/><br/>
    
    Nice to meet you!<br/><br/>
    
    This is to confirm that your contact request was received.<br/>
    <b>I will get back to you within the next 24 hours.</b><br/>
    So please stay tuned! :) <br/><br/>
    
    Best,<br/><br/> 
    
    <b>Mirco Kraenz</b><br/>
    Full-Stack Engineer | Freelancer | Kraenz Software Development<br/>

    <table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial"><tbody><tr height="25" style="vertical-align:middle"><td width="30" style="vertical-align:middle"><table cellpadding="0" cellspacing="0" style="vertical-align:-webkit-baseline-middle;font-family:Arial"><tbody><tr><td style="vertical-align:bottom"><span color="#F2547D" width="11" style="display:block;background-color:rgb(242,84,125)"><img src="https://ci3.googleusercontent.com/meips/ADKq_NZvHSmYu2-NCG_NPzpk6NN_gLctE_NdNQKl7PyZGOXUs0vhhus3sq6WQfnK-AYvhuwDc7H9-s1s_Oh-WV_dXppqqemufsUxJXZX8qrOyxW_1Ers_LaxvK1fdZqA5notV1_TjaMGyU0Sd9UgtjvB=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#F2547D" width="13" style="display:block" class="CToWUd" data-bit="iit"></span></td></tr></tbody></table></td><td style="padding:0px"><font color="#000000"><a href="http://kraenz.eu/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://kraenz.eu/&amp;source=gmail&amp;ust=1741856321656000&amp;usg=AOvVaw28e5y-e_OSDjpW2cun_DDm">kraenz.eu</a></font></td></tr></tbody></table>
<img width="96" height="31" src="https://ci3.googleusercontent.com/mail-sig/AIorK4wRK9mAgiTpr6M-GHxQm96-_AdpkB1CCRZulfg31u59kMg5tq3oe0rxrtiC4UimbVtTWdDWkrTxz9GW" class="CToWUd" data-bit="iit">
`,
  });

  const [selfEmail, _confirmationEmail] = await Promise.allSettled([
    selfEmailPromise,
    confirmationEmailPromise,
  ]);
  if (selfEmail.status === "rejected") {
    throw new Error(
      "Email sending to myself failed. Please check the logs above to instead respond the contact request manually.",
    );
  }
};
