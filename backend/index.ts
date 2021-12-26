import express, {
  json,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";
import product from "./src/product";
import logger from "morgan";

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(logger("dev"));
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const PORT = process.env.PORT || 5050;

app.use("/v1", product);

app.listen(PORT, () => console.log("server running"));
