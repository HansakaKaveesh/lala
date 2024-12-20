import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn; // Return the existing connection if it already exists
  }

  if (!cached.promise) {
    // Set the mongoose promise to connect to the database
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose); // Simplified
  }

  try {
    cached.conn = await cached.promise; // Wait for the promise to resolve
    return cached.conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}

export default connectToDatabase;

