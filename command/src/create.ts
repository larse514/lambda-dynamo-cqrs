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
        id: uuid(),
        text: request.name,
        checked: false,
        createdAt: timestamp,
        updatedAt: timestamp
      }
    };
    
    console.log(params);

    await dynamoDb.put(params);
    console.log('dynamo success');
    const response = {
      statusCode: 200,
      body: JSON.stringify({})
    };
    return Promise.resolve(response);
  }

  catch (error) {
    console.log(error);
    return Promise.reject({
      statusCode: 500,
      body: JSON.stringify({})
    })
  }
}

interface CustomerRequest {
  name: string;
}
