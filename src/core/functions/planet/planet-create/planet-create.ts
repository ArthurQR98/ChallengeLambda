import { DynamoDB } from "aws-sdk";
import { creationObj, planetSchema } from "./schema";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
const moment = require("moment");

const dynamoDb = new DynamoDB.DocumentClient();

const createPlanet = async (event, _context) => {
  try {
    let planetObj: planetSchema = event.body;

    if (typeof planetObj.nombre !== "string") {
      return formatJSONResponse({ error: "Falta la propiedad Nombre" });
    }

    const {
      diametro,
      clima,
      superficie_agua,
      nombre,
      api_url,
      periodo_rotacion,
      terreno,
      gravedad,
      periodo_orbital,
      peliculas = [],
      residentes = [],
      poblacion,
    } = planetObj;

    const params: creationObj = {
      TableName: process.env.TABLE_PLANETS,
      Item: {
        id: moment().unix(),
        diametro,
        clima,
        superficie_agua,
        nombre,
        timestamp: moment().unix(),
        api_url,
        periodo_rotacion,
        fecha_edicion: null,
        terreno,
        gravedad,
        periodo_orbital,
        peliculas,
        residentes,
        poblacion,
      },
    };

    await dynamoDb.put(params).promise();

    return formatJSONResponse(params.Item, 201);
  } catch (error) {
    return formatJSONResponse(
      { error: "no se pudo crear el item", msg: error },
      500
    );
  }
};

export const main = middyfy(createPlanet);
