const { connect } = require('./client');

/**
 * Establishes connection with the game server
 */
let connection
const setupInput = function(conn) {
  connection = conn; 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
}

const handleUserInput = ("data", key => {
  if (key === "\u003") {
    console.log("Byyeeee")
    process.exit()
  }
}); 



console.log('Connecting ...');
connect();