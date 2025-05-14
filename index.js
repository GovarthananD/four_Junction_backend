import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DB from "./database.js";
import { moviesRoute } from "./routes/movieRoute.js";
import { userRouter } from "./routes/authentication.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({origin:"https://imdb-cruds.netlify.app"}));

DB();
app.use(moviesRoute);
app.use(userRouter);



app.get("Hello IMDB", (req, res) => {
    res.send("IMDB");
})

app.listen(process.env.PORT, () => console.log("Server running on PORT", process.env.PORT));