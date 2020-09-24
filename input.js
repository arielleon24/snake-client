const { createConnection } = require("net");

const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput)

  stdin.resume();
  return stdin;
}
const handleUserInput = ('data', key => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up")
    connection.write("Say: daddy's home")
  } else if (key === 's') {
    connection.write("Move: down")
    connection.write("Say: look at meeeeee!")
  } else if (key === "a") {
    connection.write("Move: left")
    connection.write("Say: dudududududude")
  } else if (key === "d") {
    connection.write("Move: right") 
  }
});

module.exports = {
  setupInput, 
};