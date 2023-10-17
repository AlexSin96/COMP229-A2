import { MongoClient } from "mongodb";

// Add your MongoDb connection string below
const uri = "mongodb+srv://alex:7YTjYvf3zWBjlAJU@cluster0.0anvjei.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);


// Establish the MongoDB connection
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}

// Call the connection function
connectToMongoDB().catch(console.error);
export const db = client.db("Marketplace");
