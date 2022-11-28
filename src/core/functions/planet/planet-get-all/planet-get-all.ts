import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

const params = {
  TableName: process.env.TABLE_PLANETS,
};

const getAll = async (_event) => {
  try {
    const result = await dynamoDb.scan(params).promise();

    return formatJSONResponse({ data: result.Items });
  } catch (error) {
    return formatJSONResponse({ error: "error al obtener items" }, 500);
  }
};

export const main = middyfy(getAll);
