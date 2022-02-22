export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const response = await fetch(
        `${process.env.FORMSPEE_URL}/f/${process.env.FORMSPEE_TEST_FORM_ID}`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(response.status).send("Message sent successfully.");
    } catch (e) {
      return res.status(500).send("Something wrong. Try again later.");
    }
  }
}
