import app from "./app";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  app.listen(3001, () => {
    console.log("Server listening on port 3001");
  });
})();
