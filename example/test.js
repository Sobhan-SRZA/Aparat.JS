const { API } = require("../src/index");

// With api class:
const api = new API();
(async () => {
    // User information results.
    const user = await api.user.search("shervinbdndev");
    console.log(`Followers: ${user.followers.toLocaleString()}`);
    console.log(`Followings: ${user.followings.toLocaleString()}`);
    
    // Searched vidoe results.
    const videos = await api.video.search("SpongBob");
    const video = videos[0];
    console.log(video.url);
})(); 


// Check the user is on stream or not.
// If user doesn't on a stream nothing happend.
api.checkStream("shervinbdndev");
api.on("streamStart", async (user) => {
    console.log("User is on the stream:", user.live.url);
}); 
/**
 * @copyright
 * Coded by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */