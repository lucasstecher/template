import { app } from "./app";
import env from "dotenv/config";

app.listen({
  port: parseInt(process.env.SERVER_PORT || '3333'),
  host: process.env.SERVER_HOST
}).then(() => {
  console.log("Server running on port: ", process.env.SERVER_PORT);
});