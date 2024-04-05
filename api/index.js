// index.js

const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Enable CORS

// Route to get pens with specific colors
app.get("/pens", (req, res) => {
  fs.readFile("pens.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const pens = JSON.parse(data);
    const colorsToFilter = ["red", "blue", "black"];

    const filteredPens = pens.filter((pen) =>
      colorsToFilter.includes(pen.color)
    );

    res.json(
      filteredPens.map((pen) => ({
        id: pen.id,
        name: pen.name,
        color: pen.color,
      }))
    );
  });
});

// Route to get pens by color
app.get("/pens/color/:color", (req, res) => {
  const color = req.params.color.toLowerCase();

  fs.readFile("pens.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const pens = JSON.parse(data);
    const filteredPens = pens.filter(
      (pen) => pen.color.toLowerCase() === color
    );

    res.json(
      filteredPens.map((pen) => ({
        id: pen.id,
        name: pen.name,
        color: pen.color,
      }))
    );
  });
});

// Route to get a specific pen by ID
app.get("/pens/:id", (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile("pens.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const pens = JSON.parse(data);
    const foundPen = pens.find((pen) => pen.id === id);

    if (!foundPen) {
      res.status(404).send("Pen not found");
      return;
    }

    res.json({ id: foundPen.id, name: foundPen.name, color: foundPen.color });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
