import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

const getPeople = async (event) => {
  try {
    let query = event.queryStringParameters;
    let limit = query && query.limit ? Number(query.limit) : 10;
    let params = {
      TableName: process.env.TABLE_PEOPLE,
      Limit: limit,
      ScanIndexForward: false,
    };
    let data = await dynamoDb.scan(params).promise();
    return formatJSONResponse({ data });
  } catch (error) {
    return formatJSONResponse({ error: error.message });
  }
};

export const main = middyfy(getPeople);
