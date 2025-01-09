import express, { Request, Response } from "express";
import { processMessage } from "../services/chatService";
import twilio from "twilio";

const router = express.Router();
const MessagingResponse = twilio.twiml.MessagingResponse;

router.post("/", async (req: Request, res: Response) => {
  const { Body, From } = req.body;

  const responseMessage = await processMessage(Body);

  const twiml = new MessagingResponse();
  twiml.message(responseMessage);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

export default router;
