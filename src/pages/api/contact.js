export default async function handler(req, res) {
  const { Name, Email } = req.body;
  console.log(req.body);

  res.status(200).send({ data: "comment submitted." });
}
