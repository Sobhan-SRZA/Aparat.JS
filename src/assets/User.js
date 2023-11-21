const getUser = require('./function/GetUser');
module.exports = class User {
  /**
   * 
   * @param {string} username 
   * @returns 
   */
  async search(username) {
    let user = await getUser(username);
    return {
      followers: Number(user.follower_cnt),
      followings: Number(user.followed_cnt),
      total_video: Number(user.video_cnt),
      is_live: Boolean(user.has_live == "yes" ? true : false),
      is_official: Boolean(user.official == "yes" ? true : false),
      user: {
        name: String(user.name),
        username: String(user.username),
        id: Number(user.userid),
        icon: String(user.pic_b)
      }
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