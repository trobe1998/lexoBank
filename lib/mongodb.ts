// import mongoose from 'mongoose'

// const MONGODB_URI_LOCAL = process.env.MONGODB_URI_LOCAL

// if (!MONGODB_URI_LOCAL) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// declare global {
//   var mongoose: any; // This must be a `var` and not a `let / const`
// }
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect () {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       bufferCommands: false
//     }

//     cached.promise = mongoose.connect(MONGODB_URI_LOCAL!, opts).then(mongoose => {
//       return mongoose
//     })
//   }
//   cached.conn = await cached.promise
//   return cached.conn
// }
// export default dbConnect

import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) throw new Error("provide a connection string");

let client = new MongoClient(URI, options);

let clientPromise;
let globalmongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

if (process.env.NODE_ENV !== "production") {
  if (!globalmongo._mongoClientPromise) {
    globalmongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalmongo._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
