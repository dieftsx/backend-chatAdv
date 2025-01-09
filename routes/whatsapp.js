const express = require("express");
const router = express.Router();
const { processMessage } = require("../services/chatService");
const twilio = require("twilio");
const MessagingResponse = twilio.twiml.MessagingResponse;

router.post("/", async (req, res) => {
  const { Body, From } = req.body;

  const responseMessage = await processMessage(Body);

  const twiml = new MessagingResponse();
  twiml.message(responseMessage);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

module.exports = router;
