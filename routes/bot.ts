import express, { Request, Response } from "express";
import { processMessage } from "../services/chatService";

const router = express.Router();

router.post("/message", async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const responseMessage = await processMessage(message);
    res.json({ message: responseMessage });
  } catch (error) {
    res.status(500).json({ error: "Error processing message" });
  }
});

export default router;
