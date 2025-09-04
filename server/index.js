const express= require("express");
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/user");


const app =express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log("mongodb is connected"))
.catch(err=>console.error("error",err));

app.post("/api/users", async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

app.get("/api/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
  });

app.use(express.static(path.join(__dirname, "../client/build")));  
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});