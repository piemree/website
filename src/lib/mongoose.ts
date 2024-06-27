import mongoose from "mongoose";
import Topic from "../../model/topic";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGO_URI as string;

if (!MONGODB_URI) {
  console.log(process.env);
  
  throw new Error("Please add your Mongo URI to .env.local");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let glob: any = global;
let cached: any = glob.mongoose;

if (!cached) {
  cached = glob.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {};

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export const findTopics = async (query: any = {}) => {
  await dbConnect();
  const topics = await Topic.find(query).lean();
  return JSON.parse(JSON.stringify(topics));
};
