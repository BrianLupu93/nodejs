const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "starter.txt"));
    await fsPromises.writeFile(path.join(__dirname, "promiseWrite.txt"), data);
    await fsPromises.appendFile(
      path.join(__dirname, "promiseWrite.txt"),
      "\n\nNice to meet you."
    );
    await fsPromises.rename(
      path.join(__dirname, "promiseWrite.txt"),
      path.join(__dirname, "promiseCompleted.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "promiseCompleted.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// console.log("Hello...");

// read, wreite, append and rename => Callback Hell

// fs.writeFile(path.join(__dirname, "reply.txt"), "Nice to meet you!", (err) => {
//   if (err) throw err;
//   console.log("Write Complete!");

//   fs.appendFile(path.join(__dirname, "reply.txt"), "\n\n Yes it is!", (err) => {
//     if (err) throw err;
//     console.log("Append Complete!");

//     fs.rename(path.join(__dirname, "reply.txt"), "newReply.txt", (err) => {
//       if (err) throw err;
//       console.log("Rename Complete!");
//     });
//   });
// });

// exit on uncaught errors

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
