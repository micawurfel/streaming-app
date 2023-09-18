const { connectDB } = require("../database/config");

class VideoRepository {
  constructor() {}

  async getDbClient() {
    const client = await connectDB();
    return client.db("video-streming");
  }

  async getAllVideos() {
    const db = await this.getDbClient();
    return await db.collection("videos").find().toArray();
  }
}

module.exports = VideoRepository;
