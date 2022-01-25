const path = require("path");


// A Path identifies a location in a directory structure
// directories are separated by a delimiter character
// which in most cases is a slash /

console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter));