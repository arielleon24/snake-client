const { IP, PORT } = require('./constant');
const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  // conn.on('don\'t mind me, Just Sneking')
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Don\'t mind me, just snekking');
    conn.write('Name: ARI');
  }); // Why doesn't this write to the page???

  return conn;
}
module.exports = { connect }