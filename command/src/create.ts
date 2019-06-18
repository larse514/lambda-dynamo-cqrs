'use strict'

// import { DynamoDB } from 'aws-sdk'

// const dynamoDb = new DynamoDB.DocumentClient()

export const handler = async (event: any, context: any): Promise<any> => {
  const data = JSON.parse(event.body);
  console.log(data);
  // create a response
  const response = {
    statusCode: 200,
    body: JSON.stringify({})
  };
  return Promise.resolve(response);
}