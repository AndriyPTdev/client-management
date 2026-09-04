import express from "express";
import cors from "cors";

import clientsRoutes from "./routes/clients.routes.js"

console.log(">>> EXPRESS FILE LOADED");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clients", clientsRoutes);

app.listen(5001, () => {
  console.log("server running");
});
