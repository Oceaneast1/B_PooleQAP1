const {URL} = require("url");


// myURL.host gets and sets the host portion of the URL


// const myURL = new URL('https://unsure.org.3001/foo');

// console.log(myURL.host);

// myURL.host = "unsure.com:3002";

// console.log(myURL.href);


// myURL.hostname, big difference between url.host and url.hostname
// is that url.hostname does not include the port
// However when I run this I get the port included each time, not sure
// as to why right now.

const myURL = new URL('https://unsure.org.3001/foo');

console.log(myURL.hostname);

myURL.hostname = "unsure.com:3002";

console.log(myURL.href);

myURL.host = "unsure.org:3002";

console.log(myURL.href);





