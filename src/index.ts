import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(helmet());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.get("/", (req: Request, res: Response) => {
  res.send("Pomodoro backend is running!");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
