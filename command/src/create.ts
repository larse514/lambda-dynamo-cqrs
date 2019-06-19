'use strict'

import { v4 as uuid } from 'uuid';
import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()
const table = process.env.DYNAMODB_TABLE || '';

export const handler = async (event: any, context: any): Promise<any> => {

  const request: CustomerRequest = JSON.parse(event.body);
  const timestamp = new Date().getTime();
  console.log(request);
  // create a response
  const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
    TableName: table,
    Item: {
      id: uuid(),
      name: request.name,
      createdAt: timestamp,
    }
  };

  console.log(params);

  return dynamoDb.put(params, (err, result) => {

    if (err) {
      console.log(err);
      return Promise.reject({
        statusCode: 500,
        body: JSON.stringify({})
      })
    };

    console.log(result);

    const response = {
      statusCode: 200,
      body: JSON.stringify({})
    };

    return Promise.resolve(response);
  });


}

interface CustomerRequest {
  name: string;
}
