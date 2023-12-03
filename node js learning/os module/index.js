const os = require('os');

const architecture = os.arch();
console.log('Operating System Architecture:', architecture);


// free memory 
console.log('Operating System free memory ', os.freemem());

// total memory 
console.log('Operating System total memory', os.totalmem());

// network interface
console.log('Operating System network interfaces', os.networkInterfaces());


// temprory dir

console.log('temporary dic', os.tmpdir());




console.log("Os endianness: " + os.endianness)
console.log("Os hostname: " + os.hostname())
console.log("Os type: " + os.type())
console.log("Os platform: " + os.platform())
console.log("Os release" + os.release())