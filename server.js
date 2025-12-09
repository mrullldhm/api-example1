import express from "express";

const app = express();
const PORT = 8383;
let data = ["amirul"];

// Middleware (built in)
app.use(express.json());

// app.method(path, handler)
// method - post, get, put, delete
// handler - (req, res) => {}

app.get("/", (req, res) => {
  res.send("Welcome to the the API");
});

app.get("/api/v1/data", (req, res) => {
  console.log(data);
  res.send(data);
});

app.post("/api/v1/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry, `has been added successfully`);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/v1/delete", (req, res) => {
  data.pop()
  console.log("The data has been deleted succesfully");
  res.sendStatus(203);
});

// app.listen(port, callback)
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
