
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);


  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w"){
    connection.write("Move: up")
  }
  if (data === "a") {
    connection.write("Move: left")
  }
  if (data === "d") {
    connection.write("Move: right")
  }
  if (data === "s"){
    connection.write("Move: down")
  }
  if (data === "1"){
    connection.write("Say: Whoops!")
  }
  if (data === "2"){
    connection.write("Say: Nice Try")
  }
  if (data === "3"){
    connection.write("Say: GG!")
  }
  if (data === "4"){
    connection.write("Say: :P")
  }
}

module.exports = setupInput;
