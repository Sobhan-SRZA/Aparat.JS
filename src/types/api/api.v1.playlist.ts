import { NullString, YON } from "../types";

export interface ApiV1PlaylistsResponse {
    data: PlaylistRawData[];
    included: RawPlaylist[];
}

interface PlaylistRawData {
    type: string;
    id: number;
    attributes: {
        id: number;
        title: {
            text: string;
            caption: NullString;
        },
        output_type: string;
        theme: string;
        more_type: string;
        line_count: number;
        total: number;
        button: NullString;
        playlist_saved_type: string;
        dataSource_type: string;
        dataSource_key: string;
        rand_data: boolean;
        limit: number;
        link: NullString;
        link_dsp_ads: NullString;
        ads: boolean;
        caption: NullString;
        play_all: NullString;
    },
    relationships: {
        playlist: {
            data: {
                type: string;
                id: string;
            }[]
        }
    }
}

interface RawPlaylist {
    type: string;
    id: string;
    attributes: {
        id: string;
        channel_name: NullString;
        title: string;
        description: string;
        cnt: string;
        big_poster: string;
        medium_poster: string;
        small_poster: string;
        uid: string;
        toggle_url: NullString;
        publish_type: string;
        create_type: string;
        checked: string;
        order: NullString;
        last_update: NullString;
        isYours: boolean;
        playlist_follow_link: string;
        playlist_follow_status: string;
        list_videos_playlist: {
            link_prev: NullString;
            link_next: NullString;
        }
    }
}

export interface ApiPlaylistGetResponse {
    data: GetPlaylistRawData;
    included: Array<Video | Playlist | Channel | Follow>
}
interface GetPlaylistRawData {
    type: string;
    id: string;
    attributes: {
        id: string;
        channel_name: string;
        title: string;
        description: string;
        cnt: number;
        big_poster: string;
        medium_poster: string;
        small_poster: string;
        uid: string;
        toggle_url: NullString;
        publish_type: string;
        create_type: string;
        checked: string;
        order: string;
        last_update: string;
        isYours: boolean;
        playlist_follow_link: string;
        playlist_follow_status: string;
        list_videos_playlist: {
            link_prev: string;
            link_next: string;
        }
    },
    relationships: {
        video: {
            data: {
                type: string;
                id: string;
            }[]
        },
        channel: {
            data: {
                type: string;
                id: string;
            }
        },
        otherPlaylists: {
            data: {
                type: string;
                id: string;
            }[]
        }
    }
}
interface RawGetPlaylist {
    type: "Video" | "playlist" | "channel" | "Follow";
    id: string;
}
export interface Video extends RawGetPlaylist {
    attributes: {
        id: string;
        title: string;
        description: string;
        username: string;
        userid: string;
        tags: string[];
        uid: string;
        isHidden: boolean;
        visit_cnt: string;
        visit_cnt_int: string;
        process: string;
        sender_name: string;
        big_poster: string;
        small_poster: string;
        medium_poster: string;
        profilePhoto: string;
        duration: string;
        date_exact: string;
        sdate: string;
        sdate_rss: string;
        sdate_timediff: number;
        frame: string;
        official: YON;
        autoplay: boolean
        "360d": YON;
        brand_priority: string;
        like_cnt: string;
        preview_src: string;
        file_link_all: NullString;
        file_link: NullString;
        videovisit: NullString;
        like: {
            cnt: number;
        },
        share: NullString;
        meta: NullString;
        catId: string;
        hd: string;
        sensitive: boolean;
        content_type: string;
        isCompany: boolean;
        isAbroad: boolean;
        link_add_watch_later: NullString;
        hls_link: string;
        rel_id: string;
        watch: {
            monthWatch: string;
        },
        playlistId: string;
        index_playlist: number;
    },
    relationships: {
        channel: {
            data: {
                type: string;
                id: string;
            }
        }
    }
}
export interface Playlist extends RawGetPlaylist {
    attributes: {
        id: string;
        channel_name: NullString
        title: string;
        description: string;
        cnt: number;
        big_poster: NullString;
        medium_poster: NullString;
        small_poster: NullString;
        uid: NullString;
        toggle_url: NullString;
        publish_type: string;
        create_type: string;
        checked: boolean;
        order: NullString;
        last_update: NullString;
        isYours: boolean;
        list_videos_playlist: {
            link_prev: NullString;
            link_next: NullString
        }
    }
}
export interface Channel extends RawGetPlaylist {
    attributes: {
        id: string;
        username: string;
        brand_priority: string;
        caption: string;
        avatar: string;
        name: string;
        displayName: string;
        follower_cnt: string;
        priority: NullString;
        priority_type: NullString;
        link: string;
        pic: YON;
        income_type: string;
        sdate: string;
        message_cnt: string;
        video_cnt: string;
    },
    relationships: {
        follow: {
            data: {
                type: string;
                id: number;
            }
        }
    }
}
export interface Follow extends RawGetPlaylist {
    attributes: {
        link: string;
        link_toggle_push_follow: NullString;
        push_follow_status: NullString;
        status: string;
        userid: number;
        follower_cnt: string;
    }
}

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
*
* If you encounter any issues or need assistance with this code,
* please make sure to credit Persian Caesar in your documentation or communications.
*/