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
  try {
    const { Name, Email } = req.body;

    //send data to sanity

    const sanity_res = await sanityClient.create({
      _type: "newsletter",
      name: Name,
      email: Email,
    });

    if (sanity_res.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the list in Sanity list.`,
      });
    }

    // send a email

    ///------------------------/////

    console.log("Server - comment send to sanity cms");

    console.log("Server - Sent a mail to admin");

    res.status(200).send({ data: "comment submitted." });
  } catch (err) {
    return res.status(500).send({ data: err.message });
  }
}
