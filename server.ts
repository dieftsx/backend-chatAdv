import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import botRoutes from "./routes/bot";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Rotas
import whatsappRoutes from "./routes/whatsapp";
app.use("/api/whatsapp", whatsappRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("ChatADV API is running");
});
app.use("/api/bot", botRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
