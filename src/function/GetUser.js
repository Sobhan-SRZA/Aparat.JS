const options = require('../assets/Axios');
const axios = require('axios').default;
// const cheerio = require('cheerio');
const url = "https://www.aparat.com/etc/api/profile/username/";
module.exports = async function(username) {
    const res = await axios.get(url + username, options).then(res=> res);
    let user = res.data.profile;
    return user;
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