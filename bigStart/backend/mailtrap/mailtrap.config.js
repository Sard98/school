import { MailtrapClient } from "mailtrap";

const TOKEN = "06a749bf4224367836ed2c279c564580";
const ENDPOINT = "https://send.api.mailtrap.io/";

export const mailtrapClient = new MailtrapClient({
    endpoint: ENDPOINT,
    token: TOKEN
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "TEST for School",
};
