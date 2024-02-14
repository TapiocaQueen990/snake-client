const net = require("net");
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
conn.on("data", (data) => {
  console.log(`Server says ${data}`);
});


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;