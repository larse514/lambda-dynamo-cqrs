'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// import { DynamoDB } from 'aws-sdk'
// const dynamoDb = new DynamoDB.DocumentClient()
exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);
    console.log(data);
    // create a response
    const response = {
        statusCode: 200,
        body: JSON.stringify({})
    };
    return Promise.resolve(response);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7O0FBRVoscUNBQXFDO0FBRXJDLGlEQUFpRDtBQUVwQyxRQUFBLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBVSxFQUFFLE9BQVksRUFBZ0IsRUFBRTtJQUN0RSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLG9CQUFvQjtJQUNwQixNQUFNLFFBQVEsR0FBRztRQUNmLFVBQVUsRUFBRSxHQUFHO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0tBQ3pCLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFBIn0=