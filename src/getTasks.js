const AWS = require('aws-sdk');

const handler = async (event) => {

    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();

        const task = await dynamoDB.scan({
            TableName: 'TaskTable',
        }).promise();

        const tasks = task.Items;

        if (tasks.length === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'No Tasks found' })
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify(tasks)
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

}

const taskId = async (event) => {

    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters;
        const task = await dynamoDB.scan({
            TableName: 'TaskTable',
            FilterExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id
            }
        }).promise();

        const tasks = task.Items;

        if (tasks.length === 0) {

            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'No Task found' })
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify(tasks)
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

}

module.exports = {
    handler,
    taskId
}
