export default async function handler(req, res) {
  const { reference } = req.query;

  if (!reference) {
    return res.status(400).json({ error: "Falta reference" });
  }

  const response = await fetch(
    `${process.env.API_URL}/pedidos/estado/${encodeURIComponent(reference)}`
  );

  const data = await response.json();
  res.status(response.status).json(data);
}
