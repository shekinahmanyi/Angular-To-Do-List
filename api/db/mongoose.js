//Handle Connection Logic to MongoDB Database

const mongoose = require('mongoose');


mongoose
  .connect(
    "mongodb://localhost:27017",
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected Successfully to Database and listening on port 5000")
  )
  .catch((err) => console.log(err));

module.exports = {
    mongoose
};