module.exports = class Login {

    /**
     * 
     * @param {string} username
     * @param {string} password
     */
    constructor(username, password) {
        let url = `https://www.aparat.com/etc/api/login/luser/${username}/lpass/${password}`;
        let response = (url).then(res => res);
        if (response.status == 200) { 
            return response.data;
        } else {
            throw new Error("Can't loggin to aparat account OwO");
        };
    }
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