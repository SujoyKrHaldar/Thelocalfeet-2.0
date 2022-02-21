import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  apiVersion: "2021-06-24",
  useCdn: process.env.NODE_ENV === "production" ? true : false,
  token: process.env.SANITY_NEWSLETTER_API_TOKEN,
};

const sanityClient = createClient(config);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Email } = req.body;

    try {
      await sanityClient.create({
        _type: "newsletter",
        name: Name,
        email: Email,
      });
    } catch (e) {
      return res.status(500).send("Something wrong. Try again later.");
    }

    try {
      await fetch(
        `${process.env.FORMSPEE_URL}/f/${process.env.FORMSPEE_TEST_FORM_ID}`,
        {
          method: "POST",
          body: JSON.stringify({
            Name,
            Email,
            Manage:
              "Check and manage in: https://thelocalfeet.com/admin/desk/newsletter",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(201).send("Message sent successfully.");
    } catch (e) {
      return res.status(500).send("Something wrong. Try again later.");
    }
  }
}
