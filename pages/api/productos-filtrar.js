export default async function handler(req, res) {
  const { marca, rin, ancho, perfil } = req.query;

  const params = new URLSearchParams();
  params.append("populate", "IMAGEN");
  params.append("pagination[limit]", "200");

  [].concat(marca ?? []).forEach((v, i) =>
    params.append(`filters[MARCA][$in][${i}]`, v)
  );
  [].concat(rin ?? []).forEach((v, i) =>
    params.append(`filters[RIN][$in][${i}]`, v)
  );
  [].concat(ancho ?? []).forEach((v, i) =>
    params.append(`filters[ANCHO][$in][${i}]`, v)
  );
  [].concat(perfil ?? []).forEach((v, i) =>
    params.append(`filters[PERFIL][$in][${i}]`, v)
  );

  const response = await fetch(`${process.env.API_URL}/productos?${params}`);
  const data = await response.json();

  res.status(response.status).json(data);
}
