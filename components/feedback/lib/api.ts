import axios from 'axios';

export const api = axios.create({
  baseURL: "https://globpanelserver.vercel.app",
});

// This is a Demo woring server built in JavaScript using express js and using nodemailer to send the mail to the email you want. I have upload the server on GitHub for free.