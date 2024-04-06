const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Enable CORS

// Route to get pens with specific colors
const pens = require("../pens.json");

app.get("/pens", (req, res) => {
  res.json(pens);
});

// Route to get pens by color
app.get("/pens/color/:color", (req, res) => {
  const color = req.params.color.toLowerCase();

  const filteredPens = pens.filter((pen) => pen.color.toLowerCase() === color);

  res.json(filteredPens)
});

// Route to get a specific pen by ID
app.get("/pens/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foundPen = pens.find((pen) => pen.id === id);

  res.json(foundPen);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
