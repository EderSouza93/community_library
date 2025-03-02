import { Router } from "express";
import userRoutes from "./user.routes.js";
import bookRoutes from "./book.routes.js";
import loanRoutes from "./loan.routes.js";

const routers = Router();

routers.use("/users", userRoutes);
routers.use("/books", bookRoutes);
routers.use("/loans", loanRoutes);

export { routers };
