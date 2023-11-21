const { API } = require("../src/index");

// With api class
const api = new API();
(async () => {
    const user = await api.user.search("shervinbdndev");
    console.log(`Followers Count With API Class: ${user.followers.toLocaleString()}`);
    console.log(`Followings Count With API Class: ${user.followings.toLocaleString()}`);
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