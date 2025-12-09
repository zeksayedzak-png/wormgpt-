import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/darkgpt", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.YOUR_API_URL,
      { prompt: req.body.prompt },
      { headers: { "Authorization": `Bearer ${process.env.YOUR_API_KEY}`, "Content-Type": "application/json" } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 3000);
