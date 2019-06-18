'use strict'

export const handler = async (event: any, context: any): Promise<any> => {
  // create a response
  const response = {
    statusCode: 200,
    body: JSON.stringify({})
  };
  return Promise.resolve(response);
}