// const users = [
//   {
//     username: "Apples",
//     email: "A@aol.com",
//     thoughts: [
//       {
//         thoughtText: "apples taste better than oranges",
//       },
//       {
//         thoughtText: "bananas are pretty mid tbh",
//       },
//     ],
//     friends: [
//       {
//         username: "Bananas",
//         email: "B@aol.com",
//       },
//     ],
//   },
//   {
//     username: "Oranges",
//     email: "O@aol.com",
//     thoughts: [
//       {
//         thoughtText: "oranges taste better than apples",
//       },
//       {
//         thoughtText: "yeah, bananas are pretty mid",
//       },
//     ],
//     friends: [
//       {
//         username: "Bananas",
//         email: "B@aol.com",
//       },
//     ],
//   },
//   {
//     username: "Bananas",
//     email: "B@aol.com",
//     thoughts: [
//       {
//         thoughtText: "bananas are the best thing since slice bread",
//       },
//       {
//         thoughtText: "apples taste good",
//       },
//       {
//         thoughtText: "oranges taste good",
//       },
//     ],
//     friends: [
//       {
//         username: "Apples",
//         email: "A@aol.com",
//       },
//       {
//         username: "Oranges",
//         email: "O@aol.com",
//       },
//     ],
//   },
// ];

// export default users;

// import { User, Thought } from "../models/index.js";

// async function seedDatabase() {
//   try {
//     // Create thoughts in the Thought collection
//     const thought1 = await Thought.create({
//       thoughtText: "apples taste better than oranges",
//     });
//     const thought2 = await Thought.create({
//       thoughtText: "bananas are pretty mid tbh",
//     });

//     // Create a user
//     const user = await User.create({
//       username: "SampleUser",
//       email: "sample@example.com",
//       thoughts: [thought1._id, thought2._id], // Using the ObjectIds
//       friends: [], // Add friend ObjectIds here if needed
//     });

//     console.log("Database seeded!");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   }
// }

// seedDatabase();
