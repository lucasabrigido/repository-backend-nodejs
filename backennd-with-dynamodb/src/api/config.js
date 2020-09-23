module.exports = {
    debug: ['true', true].includes(process.env.DEBUG),
    stage: process.env.STAGE,
    BASE_API_URL: process.env.BASE_API_URL
};
