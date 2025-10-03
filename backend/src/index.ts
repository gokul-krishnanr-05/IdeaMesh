import express from 'express';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL as string, // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());