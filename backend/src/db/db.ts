import mongoose from "mongoose";
import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

dotenv.config();

let mongoClient: MongoClient | null;

export const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log({
            message: "Could not connect to MongoDB",
            error: err,
        });
    }
}


//for better-auth
// export const connectMongoClient = async() => {
//     if(!mongoClient){
//         mongoClient = new MongoClient(process.env.MONGODB_URL as string);
//         await mongoClient.connect();
//         console.log("Connected to MongoDB using MongoClient");
//     }
//     return mongoClient;
// }