const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve form file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  res.send(`
    <h2>Form submitted successfully!</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `);
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
