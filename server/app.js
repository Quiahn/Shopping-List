const express = require("express");
const cors = require('cors')
const { MongoClient } = require('mongodb')
// Variables
const uri = "mongodb+srv://<username>:<password>@cluster0.otqkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
app.use(cors())

// Connecting to mongodb
async function connect() {
	await client.connect()
	console.log('Connected successfully')
	const db = client.db('shopping-list')
	const collection = db.collection('user')

	return 'done.'
}

connect()
// How do we start listening to the server
app.listen(3001)
