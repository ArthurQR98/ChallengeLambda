import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { getById } from "@services/swapi-api/mth_request";
import { DynamoDB } from "aws-sdk";
import * as _ from "underscore";

const dynamoDb = new DynamoDB.DocumentClient();

const getPeopleById = async (event, _context) => {
  try {
    let id = Number(event.pathParameters.id);
    const params = {
      TableName: process.env.TABLE_PEOPLE,
      KeyConditionExpression: "id = :people_id",
      ExpressionAttributeValues: {
        ":people_id": id,
      },
      Limit: 1,
    };
    let result: any = await dynamoDb.query(params).promise();

    if (_.isEmpty(result.Items)) {
      const { data: info }: any = await getById("people", Number(id));
      const item = {
        id: id,
        nombre: info.name,
        altura: info.height,
        masa: info.mass,
        pelo_color: info.hair_color,
        piel_color: info.skin_color,
        ojos_color: info.eye_color,
        cumpleaños: info.birth_year,
        genero: info.gender,
        mundo_natal: info.homeworld,
        films: info.films,
        especies: info.species,
        vehiculo: info.vehicles,
        naves_esteleres: info.starships,
        creado: info.created,
        editado: info.edited,
        url: info.url,
      };

      await dynamoDb
        .put({ TableName: process.env.TABLE_PEOPLE, Item: item })
        .promise();
      return formatJSONResponse({ data: item });
    }
    return formatJSONResponse({ data: result.Items[0] });
  } catch (error) {
    return formatJSONResponse({ error: "error al obtener items" }, 500);
  }
};

export const main = middyfy(getPeopleById);
