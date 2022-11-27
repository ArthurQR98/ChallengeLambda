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
    const item = {
      id: moment().unix(),
      nombre: event.body.nombre,
      altura: event.body.altura,
      masa: event.body.masa,
      pelo_color: event.body.pelo_color,
      piel_color: event.body.piel_color,
      ojos_color: event.body.ojos_color,
      cumpleaños: event.body.cumpleaños,
      genero: event.body.genero,
      mundo_natal: event.body.mundo_natal,
      films: event.body.films,
      especies: event.body.especies,
      vehiculo: event.body.vehiculo,
      naves_esteleres: event.body.naves_esteleres,
      creado: moment().format(),
      url: event.body.url,
    };

    await dynamoDb
      .put({ TableName: process.env.TABLE_PEOPLE, Item: item })
      .promise();

    return formatJSONResponse(item, 201);
  } catch (error) {
    return formatJSONResponse({ error: "no se pudo crear el item" }, 500);
  }
};

export const main = middyfy(createPeople);
