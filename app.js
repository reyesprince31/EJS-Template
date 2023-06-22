import express from "express";
import { today, addNewList } from "./index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const isWeekend = today();
  const itemList = addNewList();

  res.render("list", { kindOfDay: isWeekend, newListItem: itemList });
  // res.send(`Is it the weekend? ${isWeekend}`);
  // res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const { newItem } = req.body;
  addNewList(newItem);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Successfully connected to Port", PORT);
});
