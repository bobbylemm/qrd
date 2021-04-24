import express from 'express';
import cors from "cors";

import routes from './routes'
import { sequelize } from '../db/models'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

sequelize.authenticate()
    .then(() => console.log('Connected to DB!!'))
    .catch((error) => {
        throw error
    })

app.use(routes);

export default app;