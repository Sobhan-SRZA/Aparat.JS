/**
 * 
 * @param {string} username
 * @param {string} password
 */
module.exports = async function (username, password) {
    let url = `https://www.aparat.com/etc/api/login/luser/${username}/lpass/${password}`;
    let response = await axios.get(url, options).then(res => res);
    if (response.status == 200) {
        return response.data;
    } else {
        throw new Error("Can't loggin to aparat account OwO");
    };
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