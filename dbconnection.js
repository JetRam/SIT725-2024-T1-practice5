const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sit725:FcZ3gLzGT4RB3mMK@sit725.fzrf21g.mongodb.net/?retryWrites=true&w=majority&appName=sit725";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;