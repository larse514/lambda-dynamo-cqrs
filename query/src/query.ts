'use strict'
import { DynamoDB } from 'aws-sdk'
import { ScanOutput } from 'aws-sdk/clients/dynamodb';

const dynamoDb = new DynamoDB.DocumentClient()
const table = process.env.DYNAMODB_TABLE || '';

export const handler = async (event: any, context: any): Promise<any> => {
  try {
    // create a response
    const params: AWS.DynamoDB.DocumentClient.ScanInput = {
      TableName: table,
    };

    const result: ScanOutput = await dynamoDb
      .scan(params)
      .promise();

    const customers = result.Items;
    const response = {
      statusCode: 200,
      body: JSON.stringify({ customers })
    };
    return response
  }
  catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({})
    }
  }
}