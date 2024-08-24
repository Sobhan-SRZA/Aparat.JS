var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var init_esm_shims = __esm({
  "node_modules/tsup/assets/esm_shims.js"() {
    "use strict";
  }
});

// src/components/error.ts
var error;
var init_error = __esm({
  "src/components/error.ts"() {
    "use strict";
    init_esm_shims();
    error = class extends Error {
      constructor(message) {
        super();
        this.name = "aparat.js";
        this.message = message;
      }
    };
  }
});

// src/components/user.ts
var User;
var init_user = __esm({
  "src/components/user.ts"() {
    "use strict";
    init_esm_shims();
    init_error();
    User = class {
      /**
       * 
       * @param {string} username 
       * 
       * @description
       * Finding a user by username or user profile url and returns user profile informations.
       * 
       * @example
       * ```js
       * const { API } = require("aparat.js");
       * const api = new API();
       * (async () => {
       *  // User information results.
       *  const user = await api.user.search("shervinbdndev");
       *  console.log(`Followers: ${user.followers.toLocaleString()}`);
       *  console.log(`Followings: ${user.followings.toLocaleString()}`);
       * })(); 
       * ``` 
       */
      search(username) {
        async function results() {
          try {
            const url = "https://www.aparat.com/api/fa/v1/user/user/information/username/", url1 = "https://www.aparat.com/api/fa/v2/Live/LiveStream/show/username/", url2 = "https://www.aparat.com/etc/api/profile/username/", res = await fetch(url + username).then((res2) => res2.json()), res1 = await fetch(url2 + username).then((res2) => res2.json()), live = await fetch(url1 + username).then((res2) => res2.json()), user = res.data.attributes, user1 = res1.profile, results2 = {
              description: String(user.description),
              created_at: String(user.start_date),
              followers: String(user.follower_cnt),
              followers_int: Number(user1.follower_cnt),
              followings: String(user.follow_cnt),
              followings_int: Number(user1.followed_cnt),
              priority: String(user.priority),
              total_video: Number(user.video_cnt),
              total_views: String(user.video_visit),
              is_forkids: Boolean(user.show_kids_friendly == "no" ? false : true),
              is_banned: Boolean(user.banned == "no" ? false : true),
              is_official: Boolean(user1.official == "yes" ? true : false),
              user: {
                name: String(user.name),
                username: String(user.username),
                id: Number(user.id),
                hash_id: String(user.hash_user_id),
                icon: user.pic_b ? String(user.pic_b) : null,
                cover: user.cover_src ? String(user.cover_src) : null,
                links: {
                  website: user1.url ? String(user1.url) : null,
                  twitter: user1.twitter ? String(user1.twitter) : null,
                  lenzor: user1.lenzor ? String(user1.lenzor) : null,
                  cloob: user1.cloob ? String(user1.cloob) : null,
                  facebook: user1.facebook ? String(user1.facebook) : null
                }
              },
              live: {
                is_live: Boolean(live.live_status.type === "connected" ? true : false),
                url: String(`https://www.aparat.com/${user.username}/live`),
                title: live.title ? String(live.title) : null,
                description: live.descr ? String(live.descr.replace("<p>", "").replace("</p>", "")) : null,
                cover: live.attributes?.cover ? String(live.attributes?.cover) : null,
                donate_link: live.donate_link?.url ? String(live.donate_link?.url) : null,
                last_start_date: live.last_session_start_tim ? String(live.last_session_start_time) : null,
                last_end_date: live.last_session_end_time ? String(live.last_session_end_time) : null,
                moderators: live.moderator_data ? Array(live.moderator_data) : null,
                vip_users: live.vip_users ? Array(live.vip_users.map) : null,
                tag: {
                  id: live.live_tag?.tag_id ? Number(live.live_tag?.tag_id) : null,
                  name: live.live_tag?.tag_name ? String(live.live_tag?.tag_name) : null,
                  type: live.live_tag?.tag_type ? String(live.live_tag?.tag_type) : null,
                  picture: live.live_tag?.pic ? String(live.live_tag?.pic) : null,
                  is_game: live.live_tag?.is_game ? Boolean(live.live_tag?.is_game) : null
                },
                category: {
                  id: live.live_cat?.cat_id ? Number(live.live_cat?.cat_id) : null,
                  name: live.live_cat?.cat_name ? String(live.live_cat?.cat_name) : null
                },
                chat: {
                  pined_message: live.chat_pin_message ? String(live.chat_pin_message) : null
                }
              }
            };
            return results2;
          } catch (e) {
            if (e.stack.includes("Unexpected token"))
              return results();
            throw new error("User not found OwO");
          }
        }
        ;
        return results();
      }
    };
  }
});

// src/components/video.ts
var Video;
var init_video = __esm({
  "src/components/video.ts"() {
    "use strict";
    init_esm_shims();
    init_error();
    Video = class {
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
            let res = await fetch(url).then((res2) => res2.json());
            let results2 = [];
            await res.included.forEach((element) => {
              results2.push({
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
                tags: element.attributes.tags?.map((a) => a),
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
            return results2;
          } catch (e) {
            if (e.stack.includes("Unexpected token"))
              return results();
            throw new error("Video not found OwO");
          }
        }
        ;
        return results();
      }
    };
  }
});

// src/index.ts
var require_src = __commonJS({
  "src/index.ts"(exports, module) {
    init_esm_shims();
    init_user();
    init_video();
    module.exports = {
      /**
       * @class
       * 
       * @description
       * Export all function from aparat.js package.
       * 
       * @example
       * ```js
       * const { API } = require("aparat.js");
       * const api = new API();
       * ```
       */
      API: class API {
        user;
        video;
        constructor() {
          this.user = new User();
          this.video = new Video();
        }
        /**
         * 
         * @param {string} username 
         * 
         * @description
         * Check the user is on stream or not.
         * 
         * If user doesn't on a stream nothing happend.
         * 
         * @example
         * ```js
         * api.checkStream("shervinbdndev");
         * api.once("streamStart", async (user) => {
         *  console.log("User is on the stream: ", user.live.url);
         * });
         * ```
         */
        // checkStream(username: string) {
        //   let user;
        //   let name = "streamStart";
        //   this.once(name, async () => {
        //     user = await this.user.search(username);
        //     if (user.live.is_live) {
        //       this.emit(name, user);
        //       return user;
        //     };
        //   });
        //   this.emit(name, user);
        // }
      }
    };
  }
});
export default require_src();
