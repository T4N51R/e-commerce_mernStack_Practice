require('dotenv').config();
const serverPort = process.env.SERVER_PORT || 3002;
const mongoDbURL = process.env.DB_URL || 3002;

module.exports = {serverPort,mongoDbURL};