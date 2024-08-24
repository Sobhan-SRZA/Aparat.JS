# Aparat.JS
The aparat website services in one package free to use and more quality.


# Doucement
An example to how catch user information like followers count and etc:
```js
const { API } = require("aparat.js");
const api = new API();
(async () => {

    // User information results.
    const user = await api.user.search("shervinbdndev");
    console.log(`Followers: ${user.followers.toLocaleString()}`); // Returns: 4
    console.log(`Followings: ${user.followings.toLocaleString()}`); // Returns: 2

})();
```

## User object results:
```json
{
    "description": "درود،\nتو این کانال درباره مباحث برنامه نویسی صحبت میکنم و سعی دارم تا تجربه ام از کار با تکنولوژی ها رو آموزش بدم.",
    "created_at": "2020-01-15",
    "followers": "4 ",
    "followers_int": 4,
    "followings": "2",
    "followings_int": 2,
    "priority": "null",
    "total_video": 20,
    "total_views": "224 ",
    "is_forkids": false,
    "is_banned": false,
    "is_official": false,
    "user": {
        "name": "شروین بدن آرا",
        "username": "shervinbdndev",
        "id": 7093301,
        "hash_id": "8d5f2763430188a563fa6214ed2c45777f7198a6",
        "icon": "https://static.cdn.asset.aparat.com/profile-photo/7093301-467581-b.jpg",
        "cover": null,
        "links": {
            "website": "https://shervinbdndev.vercel.app/#/",
            "twitter": null,
            "lenzor": null,
            "cloob": null,
            "facebook": null
        }
    },
    "live": {
        "is_live": false,
        "url": "https://www.aparat.com/shervinbdndev/live",
        "title": null,
        "description": null,
        "cover": null,
        "donate_link": null,
        "last_start_date": null,
        "last_end_date": null,
        "moderators": [
            []
        ],
        "vip_users": null,
        "tag": {
            "id": null,
            "name": null,
            "type": null,
            "picture": null,
            "is_game": null
        },
        "category": {
            "id": null,
            "name": null
        },
        "chat": {
            "pined_message": null
        }
    }
}
```

## How search a video or get the information from it:
```js
const { API } = require("aparat.js");

const api = new API();

(async () => {

    // Searched vidoe results.
    const videos = await api.video.search("SpongBob");
    const video = videos[0];
    console.log(video.url); // Returns: https://www.aparat.com/v/eHEjW

})();
```

Results of single video information:
```json
{
    "id": 54992465,
    "title": "بازی ترسناک باب اسفنجی در راک باتم سم کوتاه ! Spongbob Day of Terror",
    "description": "برای دلگرمی بیشتر لطفا هم زنگوله ویدیورو فعال کنید هم شبکه های اجتماعی دنبال کنید عشقید\n\nساعت استریم : هرشب ساعت 9 تا 12 در سایت آپارات\nویدیو جدید کانال هر روز ساعت 9 صبح اپلود میشه\n\nروبینو https://www.rubika.ir/ripbroadcast \nروبیکا https://www.rubika.ir/ripbroadcast11\nیوتیوب www.youtube.com/ripbroadcast\nدیسکوردwww.discord.gg/c4kXV5RHsw\nتوییچ www.twitch.tv/ripbroadcast\nتلگرام t.me/ripbroadcast\nاینستاگرام www.instagram.com/ripbroadcast\nحمایت مالی www.sibmo.ir/ripbroadcast\n\nتگ :\nعمو امیر\nRipbroadcast\nگیم پلی\n",
    "url": "https://www.aparat.com/v/eHEjW",
    "uploader": {
        "name": "Rest In Peace",
        "username": "rest_in_peace",
        "id": 3921056,
        "icon": "https://static.cdn.asset.aparat.com/profile-photo/3921056-851567-m.jpg",
        "is_official": true
    },
    "tags": [
        ""
    ],
    "views": "28 هزار",
    "views_int": 28039,
    "likes": "2782",
    "duration": 428,
    "poster": "https://static.cdn.asset.aparat.com/avt/54992465-7970-l__4352.jpg?width=900&quality=90&secret=pNq7PpNOky1WgplrE93-Kw",
    "preview": "https://static.cdn.asset.aparat.com/avt/54992465_15s.mp4",
    "frame": "https://www.aparat.com/video/video/embed/videohash/eHEjW/vt/frame",
    "publish_at": "2023-09-30 09:04:52"
}
```

Results of video search method is an array like the exmple:
```json
[
    {
        "id": 54992465,
        "title": "بازی ترسناک باب اسفنجی در راک باتم سم کوتاه ! Spongbob Day of Terror",
        "description": "برای دلگرمی بیشتر لطفا هم زنگوله ویدیورو فعال کنید هم شبکه های اجتماعی دنبال کنید عشقید\n\nساعت استریم : هرشب ساعت 9 تا 12 در سایت آپارات\nویدیو جدید کانال هر روز ساعت 9 صبح اپلود میشه\n\nروبینو https://www.rubika.ir/ripbroadcast \nروبیکا https://www.rubika.ir/ripbroadcast11\nیوتیوب www.youtube.com/ripbroadcast\nدیسکوردwww.discord.gg/c4kXV5RHsw\nتوییچ www.twitch.tv/ripbroadcast\nتلگرام t.me/ripbroadcast\nاینستاگرام www.instagram.com/ripbroadcast\nحمایت مالی www.sibmo.ir/ripbroadcast\n\nتگ :\nعمو امیر\nRipbroadcast\nگیم پلی\n",
        "url": "https://www.aparat.com/v/eHEjW",
        ...
    },
    {
        "id": 55890911,
        "title": "قسمت هفتم بازی Spongbob Battle for Bikini Bottom | مراحل خواب باب اسفنجی!",
        "description": "من رو میتونید از لینک های زیر دنبال کنید!\nhttps://rubika.ir/MRGAMETESTER\nاینستا: www.instagram.com/mr.gametesterap\nحمایت:https://reymit.ir/mr.game_tester",
        "url": "https://www.aparat.com/v/pM9mh",
        ...
    }, 
    ...
]
```