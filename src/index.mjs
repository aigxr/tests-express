import express from "express";
import routes from "./routes/tasks.mjs";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Tasks app running on ${PORT}`)
})