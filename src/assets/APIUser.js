module.exports = class User {
  /**
   * 
   * @param {string} username 
   * @returns 
   */
  async search(username) {
    let url = "https://www.aparat.com/etc/api/profile/username/";
    // let url = "https://www.aparat.com/api/fa/v1/user/user/information/username/";
    let res = await fetch(url + username).then(res => res.json());
    let user = res.profile;
    return {
      description: String(user?.descr),
      followers: Number(user?.follower_cnt),
      followings: Number(user?.followed_cnt),
      total_video: Number(user?.video_cnt),
      is_live: Boolean(user?.has_live == "yes" ? true : false),
      is_official: Boolean(user?.official == "yes" ? true : false),
      user: {
        name: String(user?.name),
        username: String(user?.username),
        id: Number(user?.userid),
        icon: String(user?.pic_b),
        cover: String(user?.cover_src),
        links: {
          website: String(user?.url),
          twitter: String(user?.twitter),
          lenzor: String(user?.lenzor),
          cloob: String(user?.cloob),
          facebook: String(user?.facebook)
        }
      }
    };
  }

  /**
   * 
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    let url = `https://www.aparat.com/etc/api/login/luser/${username}/lpass/${password}`;
    let response = await fetch(url).then(res => res);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error("Can't loggin to aparat account OwO");
    };
  }
};
/**
 * @copyright
 * Bot Coded by mr.sinre :) | https://dsc.gg/persian-caesar
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */