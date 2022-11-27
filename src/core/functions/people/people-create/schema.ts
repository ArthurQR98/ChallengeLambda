export default {
  type: "object",
  properties: {
    nombre: { type: "string" },
    ojos_color: { type: "string" },
    pelo_color: { type: "string" },
    masa: { type: "string" },
    altura: { type: "string" },
    naves_esteleres: { type: "array" },
    cumpleaños: { type: "string" },
    url: { type: "string" },
    films: { type: "array" },
    vehiculo: { type: "array" },
    mundo_natal: { type: "string" },
    piel_color: { type: "string" },
    especies: { type: "array" },
    creado: { type: "date" },
    genero: { type: "string" },
  },
  required: ["nombre"],
} as const;
