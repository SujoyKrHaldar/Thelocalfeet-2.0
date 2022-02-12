import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  apiVersion: "2021-06-24",
  useCdn: process.env.NODE_ENV === "production" ? true : false,
  token: process.env.SANITY_COMMENT_API_TOKEN,
};

const sanityClient = createClient(config);

export default async function handler(req, res) {
  const { id, Name, Email, Message } = req.body;

  console.log(req.body);

  try {
    await sanityClient.create({
      _type: "comments",
      post: {
        _type: "reference",
        _ref: id,
      },
      isApproved: false,
      name: Name,
      email: Email,
      comment: Message,
    });

    res.status(200).send({ data: "comment submitted." });

    console.log("Server - comment send to sanity cms");

    // const text = {
    //   msg: `You have new comment. Please do approve it. Link: ${process.env.DASHBOARD}`,
    // };

    // await fetch(
    //   `${process.env.FORMSPEE_URL}/f/${process.env.FORMSPEE_FEEDBACK_FORM_ID}`,
    //   {
    //     method: "POST",
    //     body: req.body,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    console.log("Server - Sent a mail to admin");
  } catch (err) {
    return res.status(500).send({ data: err.message });
  }
}
