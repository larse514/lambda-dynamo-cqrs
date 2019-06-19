'use strict'

import { v4 as uuid } from 'uuid';
import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()
const table = process.env.DYNAMODB_TABLE || '';

export const handler = async (event: any, context: any): Promise<any> => {
  try {
    const request: CustomerRequest = JSON.parse(event.body);
    const timestamp = new Date().getTime();
    console.log(request);
    // create a response
    const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
      TableName: table,
      Item: {
        CustomerId: uuid(),
        Name: request.name,
        CreatedAt: timestamp,
      }
    };

    console.log(params);

    await dynamoDb.put(params).promise();

    const response = {
      statusCode: 200,
      body: JSON.stringify({})
    };

    return Promise.resolve(response);
  }
  catch (err) {
    console.log(err);
    return Promise.reject({
      statusCode: 500,
      body: JSON.stringify({})
    })
  }
}

interface CustomerRequest {
  name: string;
}
