const { API, Aparat } = require('../src/index');

// With api class
const api = new API();
(async () => {
    const user = await api.user.search("shervinbdndev");
    console.log(user.followers.toLocaleString());
    console.log(user.followings.toLocaleString());
})();

// With aparat class
const aparat = new Aparat();
(async () => {
    const user = await aparat.user.search("shervinbdndev");
    console.log(user.followers.toLocaleString());
    console.log(user.followings.toLocaleString());
})();
/**
 * @copyright
 * Bot Coded by mr.sinre :) | https://dsc.gg/persian-caesar
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */