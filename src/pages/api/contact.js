export default async function handler(req, res) {
  const values = req.body;

  if (req.method === "POST") {
    try {
      const response = await fetch(
        `https://${process.env.FORMSPEE_URL}/f/${process.env.FORMSPEE_CONTACT_FORM_ID}`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`API route response status : ${response.status}`);
      return res.status(200).send({ data: "comment submitted." });
    } catch (e) {
      console.log(e.message);
      console.log(`API route response status : ${e}`);

      return res.send({ error: e.message });
    }
  }
}
