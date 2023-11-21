module.exports = class Video {
  /**
   * 
   * @param {string} args 
   */
  async search(args) {
    let url = `https://www.aparat.com/etc/api/videoBySearch/text/${args}`;
    // let url = `https://www.aparat.com/api/fa/v1/video/video/search/text/${args}/?type_search=search`;
    let res = await fetch(url).then(res => res.json());
    let vidoes = res;
    return vidoes;
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