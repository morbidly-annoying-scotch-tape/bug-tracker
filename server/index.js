import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({ limit: "30mb", extendet: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extendet: true }));
app.use(cors());

const CONNECTION_URL = '/mongodb+srv://morbidly-annoying-scotch-tape:6Pq4ZQvzZvdisgFY@cluster0.ggphy.mongodb.net/cluster0?retryWrites=true&w=majority';

const PORT = process.env.port || 5000; 