export const handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        // run migration

    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }

    return 'OK';
};
