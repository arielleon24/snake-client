const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });

  let timer = 500
  // interpret incoming data as text
  // conn.on('don\'t mind me, Just Sneking')
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Don\'t mind me, just snekking');
    conn.write('Name: ARI');
    setTimeout(function() { conn.write("Move: up")}, timer += 500)
    setTimeout(function() { conn.write("Move: up")}, timer += 500)
    setTimeout(function() { conn.write("Move: up")}, timer += 500)
    setTimeout(function() { conn.write("Move: right")}, timer += 500)
    setTimeout(function() { conn.write("Move: right")}, timer += 500)
    setTimeout(function() { conn.write("Move: right")}, timer += 500)
    setTimeout(function() { conn.write("Move: right")}, timer += 500)
    setTimeout(function() { conn.write("Move: right")}, timer += 500)
    
  }); // Why doesn't this write to the page???

  return conn;
}
module.exports = { connect }