import express from "express";
import "dotenv/config";
import userRoutes from "./src/routes/user.routes.js";
import bookRoutes from "./src/routes/book.routes.js";
import loanRoutes from "./src/routes/loan.routes.js";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);
app.use(loanRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
