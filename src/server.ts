import "reflect-metadata";
import "dotenv/config";
import express from "express";
import routes from "./routes";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/v1", routes);

app.listen(3333, () => {
    console.log("Server started successfully");
});
