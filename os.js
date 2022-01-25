const os = require('os');



// Returns it as the system's default directory for temporary files as a string
//console.log('tmpdir: ' , os.tmpdir());

 

// Returns an array of objects about the cpu core
//console.log("cpus: ", os.cpus());

 

// Returns a string  identifying the platform: This one's value is 'darwin'
//console.log("platform: ", os.platform());

 

// Returns an integer as the total amount of system memory in bytes
console.log("totalmem: ", os.totalmem());