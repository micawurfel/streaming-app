const { MongoClient } = require('mongodb')
const createCollections = require('./create-collections')

let client // Declare the client object at the module level. (Singleton Pattern)

async function connectDB () {
  try {
    if (!client) {
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
      const uri = 'mongodb://127.0.0.1:27017'
      client = new MongoClient(uri, options)
      const db = client.db('video-streming')
      const collections = await db.listCollections().toArray()
      if (!collections || collections.length === 0) {
        await createCollections(client)
      }
      await client.connect()
    }

    return client
  } catch (error) {
    throw new Error('Error trying to connect to database', error.message)
  }
}

module.exports = { connectDB }
