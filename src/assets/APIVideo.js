module.exports = class Video {

  /**
   * 
   * @param {string} args 
   * 
   * @description 
   * Search for a videos with name or tag and returns the videos information in Array.
   * 
   * @example
   * ```js
   * const { API } = require("aparat.js");
   * const api = new API();
   * (async () => {
   *  // Searched vidoe results.
   *  const videos = await api.video.search("SpongBob");
   *  console.log(videos);
   * })(); 
   * ```
   */
  search(args) {
    async function results() {
      try {
        let url = `https://www.aparat.com/api/fa/v1/video/video/search/text/${args}/?type_search=search`;
        let res = await fetch(url).then(res => res.json());
        let results = [];
        await res.included.forEach(element => {
          results.push({
            id: Number(element.attributes.id),
            title: String(element.attributes.title),
            description: String(element.attributes.description),
            url: String(`https://www.aparat.com/v/${String(element.attributes.frame).replace("https://www.aparat.com/video/video/embed/videohash/", "").replace("/vt/frame", "")}`),
            uploader: {
              name: String(element.attributes.sender_name),
              username: String(element.attributes.username),
              id: Number(element.attributes.userid),
              icon: String(element.attributes.profilePhoto),
              is_official: Boolean(element.attributes.official == "no" ? false : true)
            },
            tags: (element.attributes.tags)?.map(a => a),
            views: String(element.attributes.visit_cnt),
            views_int: Number(element.attributes.visit_cnt_int),
            likes: String(element.attributes.like_cnt),
            duration: Number(element.attributes.duration),
            poster: String(element.attributes.big_poster),
            preview: String(element.attributes.preview_src),
            frame: String(element.attributes.frame),
            publish_at: String(element.attributes.sdate_rss)
          });
        });
        return results;
      } catch (error) {
        if (error.stack.includes("Unexpected token")) {
          return results();
        } else {
          throw Error("Video not found OwO");
        }
      }
    };
    return results();
  }
};
/**
 * @copyright
 * Coded by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */