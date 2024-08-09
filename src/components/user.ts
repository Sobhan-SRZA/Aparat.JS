import { error } from "./error";

export class User {

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
    search(username: string) {
        async function results() {
            try {
                const url = "https://www.aparat.com/api/fa/v1/user/user/information/username/",
                    url1 = "https://www.aparat.com/api/fa/v2/Live/LiveStream/show/username/",
                    url2 = "https://www.aparat.com/etc/api/profile/username/",
                    res = await fetch(url + username).then(res => res.json()),
                    res1 = await fetch(url2 + username).then(res => res.json()),
                    live = await fetch(url1 + username).then(res => res.json()),
                    user = res.data.attributes,
                    user1 = res1.profile,
                    results = {
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
                return results;
            } catch (e: any) {
                if (e.stack.includes("Unexpected token"))
                    return results();

                throw new error("User not found OwO");
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