const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const handler = async (event) => {

    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();

        const { title, description } = JSON.parse(event.body);
        const createdAt = new Date().toISOString();
        const id = v4();

        const newTask = {
            id,
            title,
            description,
            createdAt
        }

        await dynamoDB.put({
            TableName: 'TaskTable',
            Item: newTask
        }).promise();

        return {
            statusCode: 201,
            body: JSON.stringify(newTask)
        }
    } catch (error) {
        console.log('Error es', error);
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

module.exports = {
    handler
}