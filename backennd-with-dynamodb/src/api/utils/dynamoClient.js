import AWS from 'aws-sdk';
import stackTrace from 'stack-trace';
import LogReporting from './LogReporting';

async function execute(dynamoClient, params) {
    const trace = stackTrace.get();
    const fname = trace[1].getFunctionName();
    const dc = dynamoClient._dc;
    let result;
    let hasError = false;

    const p = LogReporting.start('dynamodb', fname, params);

    try {
        result = await dc[fname](params).promise();
        return result;
    } catch (e) {
        result = e;
        hasError = true;
        throw e;
    } finally {
        LogReporting[hasError ? 'exception' : 'success'](p, result);
    }
}

export default class DynamoClient {
    constructor(props) {
        this._dc = new AWS.DynamoDB.DocumentClient(props ? props : null);
        this._debug = props?.debug ? props.debug === true : false;
    }

    /**
     * @param {AWS.DynamoDB.DocumentClient.PutItemInput} params
     * @returns {Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>}
     */
    async put(params) {
        return await execute(this, params);
    }

    /**
     * @param {AWS.DynamoDB.DocumentClient.GetItemInput} params
     * @returns {Promise<AWS.DynamoDB.DocumentClient.GetItemOutput>}
     */
    async get(params) {
        return await execute(this, params);
    }

    /**
     * @param {AWS.DynamoDB.DocumentClient.UpdateItemInput} params
     * @returns {Promise<AWS.DynamoDB.DocumentClient.UpdateItemOutput>}
     */
    async update(params) {
        return await execute(this, params);
    }

    /**
     * @param {AWS.DynamoDB.DocumentClient.DeleteItemInput} params
     * @returns {Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput>}
     */
    async delete(params) {
        return await execute(this, params);
    }

    /**
     * @param {AWS.DynamoDB.DocumentClient.QueryInput} params
     * @returns {Promise<AWS.DynamoDB.DocumentClient.QueryOutput>}
     */
    async query(params) {
        return await execute(this, params);
    }

    /**
     * @param {AWS.DynamoDB.DocumentClient.ScanInput} params
     * @returns {Promise<AWS.DynamoDB.DocumentClient.ScanOutput>}
     */
    async scan(params) {
        return await execute(this, params);
    }

    /**
     * @param {AWS.DynamoDB.DocumentClient.BatchGetItemInput} params
     * @returns {Promise<AWS.DynamoDB.DocumentClient.BatchGetItemOutput>}
     */
    async batchGet(params) {
        return await execute(this, params);
    }

    /**
     * @param {AWS.DynamoDB.DocumentClient.BatchWriteItemInput} params
     * @returns {Promise<AWS.DynamoDB.DocumentClient.BatchWriteItemOutput>}
     */
    async batchWrite(params) {
        return await execute(this, params);
    }
}