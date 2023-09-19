async function createCollections (client) {
  const db = client.db('video-streming')

  try {
    // Create collections here
    await db.createCollection('videos')
  } catch (error) {
    console.error('Error creating collections:', error)
  }
}

module.exports = createCollections
