import express from "express";
import { router } from "./routes";
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(router);
app.use(cors())

app.listen(3000, () => console.log("Server is running on PORT 3000"));