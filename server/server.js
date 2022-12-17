const express = require("express");
const app = express();

const timeChecker = (req, res, next) => {
  const start = 9 * 60;
  const end = 17 * 60;
  let date = new Date();
  let now = date.getHours() * 60 + date.getMinutes();
  let day = date.getDay();
  if (day >= 1 && day <= 5 && now >= start && now <= end) {
    next();
  } else {
    res.json({ content: "Sorry, We are closed now" });
  }
};

app.use("/*", timeChecker);

app.get("/home", (req, res) => {
  res.json({ content: "Home" });
});
app.get("/ourservices", (req, res) => {
  res.send({ content: "Our Services" });
});
app.get("/contactus", (req, res) => {
  res.send({ content: "Contact Us" });
});

app.listen(5000);
console.log(`working on : http://localhost:5000`);
