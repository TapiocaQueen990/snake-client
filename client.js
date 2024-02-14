const net = require("net");
// const { setInterval } = require("timers/promises");
// const { Client } = require("undici-types");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: PHO");
  })
  conn.on('data', () => {
    conn.write("Move: up");
    conn.write("Move: down");
    conn.write("Move: left");
    conn.write("Move: right");
  })
  // conn.on('data', () => {
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 50)
  // })

conn.on("data", (data) => {
  console.log(`Server says ${data}`);
});


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;