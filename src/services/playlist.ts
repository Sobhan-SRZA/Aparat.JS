import {
  BaseApiUrlTypes,
  ErrorCodes,
  VideoQuality
} from "../types/enums";
import {
  GetPlaylist,
  SearchVideo
} from "../types/interfaces";
import {
  ApiPlaylistGetResponse,
  Channel,
  Video
} from "../types/api/api.v1.playlist";
import { ApiVideoSearchV1Response } from "../types/api/api.v1.video";
import { VideoService } from "./video";
import { ApiService } from "../core/api";
import { Endpoints } from "../utils/endpoints";
import { APIError } from "../utils/error-handler";

export class PlaylistService {
  constructor(private api: ApiService) { }

  /**
   * Searches for videos matching a query string.
   * It filters and maps the API response to an array of SearchVideo objects.
   *
   * @param query - The search term used to find videos.
   * @returns A Promise that resolves to an array of SearchVideo objects.
   */
  public async search(query: string): Promise<Array<SearchVideo>> {
    try {
      const data: ApiVideoSearchV1Response = await this.api.fetch(
        BaseApiUrlTypes.ApiV1,
        Endpoints.V1.SearchVideo(query)
      );

      // Filter items to include only videos and map them to the SearchVideo interface
      const results: Array<SearchVideo> = data.included
        .filter(item => item.type === "Video")
        .map(item => {
          return {
            id: parseInt(item.attributes.id),
            hash_id: item.attributes.uid,
            title: item.attributes.title,
            description: item.attributes.description,
            url: `https://www.aparat.com/v/${item.attributes.uid}`,
            views: parseInt(item.attributes.visit_cnt_int),
            likes: parseInt(item.attributes.like_cnt),
            duration: parseInt(item.attributes.duration),
            thumbnail: item.attributes.big_poster,
            preview: item.attributes.preview_src,
            frame: item.attributes.frame,
            publish_at: new Date(item.attributes.sdate_timediff),
            uploader: {
              id: item.attributes.userid,
              name: item.attributes.sender_name,
              username: item.attributes.username,
              icon: item.attributes.profilePhoto,
              is_official: item.attributes.official === "yes" ? true : false
            }
          }
        });

      return results;
    }

    catch (error) {
      // Throw a custom APIError if the search fails
      throw new APIError(
        ErrorCodes.SEARCH_ERROR,
        "Faild to search the playlist by string"
      );
    }
  }

  /**
   * Retrieves detailed information about a video by its id.
   *
   * @param id - The unique id identifier for the video.
   * @returns A Promise that resolves to a GetPlaylist object containing video details.
   */
  public async get(id: string): Promise<GetPlaylist> {
    try {
      const data: ApiPlaylistGetResponse = await this.api.fetch(
        BaseApiUrlTypes.ApiV1,
        Endpoints.V1.GetPlaylist(id)
      );

      const channel = (data.included
        .filter(a => a.type === "channel")[0] as Channel).attributes;

      const videos = data.included
        .filter(a => a.type === "Video") as Video[]

      // Construct and return a GetPlaylist object based on API response data
      return {
        id: data.data.id,
        count: data.data.attributes.cnt,
        last_update: data.data.attributes.last_update,
        title: data.data.attributes.title,
        hash_id: data.data.attributes.uid,
        poster: data.data.attributes.big_poster,
        channel: {
          id: channel.id,
          name: channel.name,
          username: channel.username,
          displayName: channel.displayName,
          avatar: channel.avatar,
          caption: channel.caption,
          created_at: new Date(channel.sdate),
          videos: Number(channel.video_cnt)
        },
        videos: videos.map(
          video =>
          ({
            id: video.attributes.id,
            hash_id: video.attributes.uid,
            duration: Number(video.attributes.duration),
            index: video.attributes.index_playlist,
            likes: Number(video.attributes.like_cnt),
            publish_at: new Date(video.attributes.sdate_rss),
            tags: video.attributes.tags,
            thumbnail: video.attributes.big_poster,
            title: video.attributes.title,
            views: Number(video.attributes.visit_cnt_int),
            preview: video.attributes.preview_src
          })
        )
      }
    }

    catch (error) {
      // If fetching video details fails, wrap the error in an APIError
      throw new APIError(
        ErrorCodes.SEARCH_ERROR,
        "Faild to search the playlist by id"
      );
    }
  }

  /**
   * Downloads a video file by streaming it from a provided download URL.
   * It checks for download availability and selects the appropriate quality.
   *
   * @param id - The unique id of the video.
   * @param quality - The desired video quality (default is P720).
   * @param outputPath - The file path prefix where the video will be saved.
   * @returns A Promise that resolves when the video is successfully downloaded.
   */
  public async download(
    id: string,
    quality: VideoQuality = VideoQuality.P720,
    outputPath: string = "./playlist"
  ): Promise<void> {
    try {
      const playlist: GetPlaylist = await this.get(id);

      outputPath = outputPath
        .replace(
          "{playlistName}",

          // Clean the out put path from invalid chars.
          playlist.title.replace(/[\/\\:?"<>|*]/g, " ")
        )

      await Promise.all(
        playlist.videos.map(async raw_video => {
          const videoService = new VideoService(this.api);

          await videoService.download(raw_video.hash_id, quality, outputPath)
        })
      )
    }

    catch (error) {
      // Wrap any download-related errors into an APIError and throw
      throw new APIError(
        ErrorCodes.DOWNLOAD_ERROR,
        error instanceof Error
          ? error.message
          : "Faild to download the video from playlist!"
      );
    }
  }
}

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */