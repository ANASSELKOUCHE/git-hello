const fs = require("node:fs");

fs.readFile("index.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.unlink("mouman.txt", (err) => {
  console.log("File deleted successfully");
});

fs.appendFile("index.txt", "NASSIME MRIIID", (err) => {
  console.log("file modified successfuly");
});
