import express from "express";
import product from "./src/product";
const app = express();
const PORT = process.env.PORT || 5050;
app.use("/v1", product);
app.listen(PORT, () => console.log("server running"));
