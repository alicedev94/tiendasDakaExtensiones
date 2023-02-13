const Connection = require("tedious").Connection;
const Request = require("tedious").Request;
require("dotenv").config();

const config = {
  server: process.env.SEVER,
  options: {
    database: process.env.DATA_BASE,
    encrypt: false,
  },
  authentication: {
    type: "default",
    options: {
      userName: process.env.USER_NAME,
      password: process.env.PASSWORD,
    },
  },
};

module.exports = {
  Connection,
  Request,
  config
};


