/**
 * Netlify Background Function: triggered automatically when a Netlify Form
 * submission is created. The function name "submission-created" is a Netlify
 * convention -- it fires on every form submit without any extra wiring.
 *
 * Use this to send notifications, sync to a CRM, log to a spreadsheet, etc.
 * Right now it just logs + returns, but you can drop in SendGrid, Twilio,
 * Google Sheets API, or whatever you need.
 */
exports.handler = async (event) => {
  const { payload } = JSON.parse(event.body);
  const { name, email, service, message } = payload.data;

  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Service: ${service || 'Not specified'}`);
  console.log(`Message: ${message}`);
  console.log('----------------------------------');

  // Example: Slack webhook notification (uncomment + set env var SLACK_WEBHOOK_URL)
  //
  // const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  // if (webhookUrl) {
  //   await fetch(webhookUrl, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       text: `New inquiry from ${name} (${email})\nService: ${service}\n${message}`,
  //     }),
  //   });
  // }

  // Example: SendGrid email (uncomment + set env vars)
  //
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: 'beautysleepstudiopdx@gmail.com',
  //   from: 'noreply@beautysleepstudiopdx.com',
  //   subject: `New inquiry from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
  // });

  return { statusCode: 200 };
};
