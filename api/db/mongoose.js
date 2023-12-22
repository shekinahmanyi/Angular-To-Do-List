const mongoose = require("mongoose");

// Encode the password
const password = encodeURIComponent("aHwXfY9h48TwrGm6");

// Use the encoded password in the connection string
mongoose
  .connect(
    `mongodb+srv://shekinahmanyi:${password}@cluster0.6amgtor.mongodb.net/`
  )
  .then(() => console.log("Connected Successfully to Database"))
  .catch((err) => console.log(err));

module.exports = {
  mongoose,
};
