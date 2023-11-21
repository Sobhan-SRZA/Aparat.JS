# aparat.js
The aparat website services in one package free to use and more quality.


# Doc
An example to how catch user information like followers count and etc:
```js
const { API } = require("aparat.js");

const api = new API();
(async () => {
    const user = await api.user.search("shervinbdndev");
    console.log(`Followers Count With API Class: ${user.followers.toLocaleString()}`);
    console.log(`Followings Count With API Class: ${user.followings.toLocaleString()}`);
})();
```