import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

const getOne = async (event) => {
  try {
    const id = Number(event.pathParameters.id);

    const params = {
      TableName: process.env.TABLE_PLANETS,
      KeyConditionExpression: "id = :planet_id",
      ExpressionAttributeValues: {
        ":planet_id": id,
      },
      Limit: 1,
    };

    const result = await dynamoDb.query(params).promise();

    return formatJSONResponse({ data: result.Items[0] });
  } catch (error) {
    return formatJSONResponse(
      { error: "error al obtener item " + event.pathParameters.id },
      500
    );
  }
};

export const main = middyfy(getOne);
