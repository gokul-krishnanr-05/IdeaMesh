import express from 'express';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());