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
      "This is what i append assynchrously!"
    );
    await fsPromises.rename(
      path.join(__dirname, "promiseWrite.txt"),
      path.join(__dirname, "promiseRename.txt")
    );
  } catch (err) {
    console.log(err);
  }
};

fileOps();

// fs.readFile(path.join(__dirname, "starter.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(path.join(__dirname, "reply.txt"), "Nice to meet you", (err) => {
//   if (err) throw err;
//   console.log("Write complete");

//   fs.appendFile(
//     path.join(__dirname, "reply.txt"),
//     "\n\n Hello there test",
//     (err) => {
//       if (err) throw err;
//       console.log("Append complete");

//       fs.rename(
//         path.join(__dirname, "reply.txt"),
//         path.join(__dirname, "newReply.txt"),

//         (err) => {
//           if (err) throw err;
//           console.log("Rename complete");
//         }
//       );
//     }
//   );
// });

// exit on uncaught errors

// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught error: ${err}`);
//   process.exit(1);
// });
