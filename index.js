import express from "express";
import "dotenv/config";
import userRoutes from "./src/routes/user.routes.js";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
