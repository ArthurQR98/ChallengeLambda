import {
  formatJSONResponse,
  ValidatedEventAPIGatewayProxyEvent,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { DynamoDB } from "aws-sdk";
import schema from "./schema";
const dynamoDb = new DynamoDB.DocumentClient();
const moment = require("moment");

const createPeople: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const item = await save(event.body);
    return formatJSONResponse(item, 201);
  } catch (error) {
    return formatJSONResponse({ error: "no se pudo crear el item" }, 500);
  }
};

async function save(body) {
  const item = {
    id: moment().unix(),
    nombre: body.nombre,
    altura: body.altura,
    masa: body.masa,
    pelo_color: body.pelo_color,
    piel_color: body.piel_color,
    ojos_color: body.ojos_color,
    cumpleaños: body.cumpleaños,
    genero: body.genero,
    mundo_natal: body.mundo_natal,
    films: body.films,
    especies: body.especies,
    vehiculo: body.vehiculo,
    naves_esteleres: body.naves_esteleres,
    creado: moment().format(),
    url: body.url,
  };

  await dynamoDb
    .put({ TableName: process.env.TABLE_PEOPLE, Item: item })
    .promise();
  return item;
}

export const main = middyfy(createPeople);
