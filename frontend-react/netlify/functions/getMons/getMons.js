const { MongoClient } = require("mongodb");

let cachedDb = null;

const connectToDatabase = async (uri) => {
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db(process.env.MONGODB_DATABASE);
  return cachedDb;
};

const queryDatabase = async (db) => {
  const pokemon = await db.collection(process.env.MONGODB_COLLECTION).find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  };
};

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase(process.env.MONGODB_URI);
  return queryDatabase(db);
};