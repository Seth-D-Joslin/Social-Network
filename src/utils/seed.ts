// import connection from "../config/connection.js";
// import { User } from "../models/index.js";
// import users from "./data.js";

// connection.on("error", (err) => err);

// connection.once("open", async () => {
//   console.log("connected");
//   // Delete the collections if they exist
//   let applicationCheck = await connection.db
//     ?.listCollections({ name: "applications" })
//     .toArray();
//   if (applicationCheck?.length) {
//     await connection.dropCollection("applications");
//   }

//   let userCheck = await connection.db
//     ?.listCollections({ name: "users" })
//     .toArray();
//   if (userCheck?.length) {
//     await connection.dropCollection("users");
//   }

//   await User.insertMany(users);

//   // loop through the saved applications, for each application we need to generate a application response and insert the application responses
//   console.table(users);
//   console.info("Seeding complete! 🌱");
//   process.exit(0);
// });
