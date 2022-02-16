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
  if (req.method == "POST") {
    // const { id, Name, Email, Message } = req.body;
    const data = req.body;

    try {
      // const response = await sanityClient.create({
      //   _type: "comments",
      //   post: {
      //     _type: "reference",
      //     _ref: id,
      //   },
      //   isApproved: false,
      //   name: Name,
      //   email: Email,
      //   comment: Message,
      // });

      // console.log(response);

      // const text = {
      //   msg: `You have new comment. Please do approve it. Link: ${process.env.DASHBOARD}`,
      // };

      const msg = `You have new comment. Please do approve it. Link: ${process.env.DASHBOARD}`;

      const response = await fetch(
        `${process.env.FORMSPEE_URL}/f/${process.env.FORMSPEE_CONTACT_FORM_ID}`,
        {
          method: "POST",
          body: JSON.stringify({
            msg: `You have new comment. Please do approve it. Link: ${process.env.DASHBOARD}`,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      console.log(response);

      res.status(200).send("comment submitted.");

      // console.log("Server - Sent a mail to admin");
    } catch (err) {
      return res.status(500).send({ data: err.message });
    }
  }
}
