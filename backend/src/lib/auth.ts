import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { client } from "../db/db"; // your mongodb client
import { openAPI } from "better-auth/plugins";
import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URL as string);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    trustedOrigins:[],
    advanced: {
        defaultCookieAttributes: {
            sameSite: "none",
            secure: true,
            httpOnly: true,
            //domain:".ideamesh.com",
        }
    },
    plugins: [
        openAPI(),
    ]
});