const resolve = require("path").resolve
const config = require("dotenv").config

config({ path: resolve(__dirname, "../../.env") })