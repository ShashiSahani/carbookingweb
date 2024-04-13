const mongoose = require("mongoose");
const dbURI ='mongodb+srv://shashisahani63531:123456789ok@cluster0.4vvt7hj.mongodb.net/sheycars?retryWrites=true&w=majority&appName=Cluster0'; // Update with your MongoDB database name

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

module.exports = db;

