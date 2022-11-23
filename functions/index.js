const functions = require("firebase-functions");
const express = require('express')
const app = express()
var routes = require('./route')
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
app.use('/', routes)
exports.api = functions.https.onRequest(app);