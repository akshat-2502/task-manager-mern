const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khulbeakshat:Akshat%4025@cluster0.rvistdb.mongodb.net/myDB"
    );
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Not Connected:", error.message);
  }
};

conn();
