const { connectDB } = require("../database/config");

class VideoRepository {
  constructor() {}

  async getDbClient() {
    return await connectDB();
  }

  async getAllVideos() {
    const client = await this.getDbClient();
    return await client
      .db("video-streming")
      .collection("videos")
      .find()
      .toArray();
  }
}

module.exports = VideoRepository;
