declare class User {
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
    search(username: string): Promise<{
        description: string;
        created_at: string;
        followers: string;
        followers_int: number;
        followings: string;
        followings_int: number;
        priority: string;
        total_video: number;
        total_views: string;
        is_forkids: boolean;
        is_banned: boolean;
        is_official: boolean;
        user: {
            name: string;
            username: string;
            id: number;
            hash_id: string;
            icon: string | null;
            cover: string | null;
            links: {
                website: string | null;
                twitter: string | null;
                lenzor: string | null;
                cloob: string | null;
                facebook: string | null;
            };
        };
        live: {
            is_live: boolean;
            url: string;
            title: string | null;
            description: string | null;
            cover: string | null;
            donate_link: string | null;
            last_start_date: string | null;
            last_end_date: string | null;
            moderators: any[] | null;
            vip_users: any[] | null;
            tag: {
                id: number | null;
                name: string | null;
                type: string | null;
                picture: string | null;
                is_game: boolean | null;
            };
            category: {
                id: number | null;
                name: string | null;
            };
            chat: {
                pined_message: string | null;
            };
        };
    }>;
}

declare class Video {
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
    search(args: string): Promise<any>;
}

declare const _default: {
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
    API: {
        new (): {
            user: User;
            video: Video;
        };
    };
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

export { _default as default };
