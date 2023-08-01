import videos from "./videos.json"

export class ApiService {
   async getVideos(){
    return await videos
   }
}