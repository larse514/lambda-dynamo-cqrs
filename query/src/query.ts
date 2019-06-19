'use strict'
import { DynamoDB } from 'aws-sdk'
import { QueryOutput } from 'aws-sdk/clients/dynamodb';

const dynamoDb = new DynamoDB.DocumentClient()
const table = process.env.DYNAMODB_TABLE || '';

export const handler = async (event: any, context: any): Promise<any> => {
  try {
    // create a response
    const params: AWS.DynamoDB.DocumentClient.QueryInput = {
      TableName: table
    };

    const result: QueryOutput = await dynamoDb.query(params).promise();
    const customers = result.Items;
    const response = {
      statusCode: 200,
      body: JSON.stringify({ customers })
    };
    return Promise.resolve(response)
  }
  catch (err) {
    console.log(err);
    return Promise.reject({
      statusCode: 500,
      body: JSON.stringify({})
    })
  }
}