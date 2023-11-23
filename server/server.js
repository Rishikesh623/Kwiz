const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//conection established
mongoose.connect("mongodb://127.0.0.1:27017/Register",)

.then(() => console.log("Connection successful ..."))
.catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      let user = await User.findOne({ email: email });
      if (user) {
          if (password === user.password) {
              res.send({ message: "Login Successful", user: user });
          } else {
              res.send({ message: "Password didn't match" });
          }
      } else {
          res.send({ message: "User not registered" });
      }
  } catch (err) {
      res.send(err);
  }
});



app.post('/register', async (req, res) => {

      try {
          const { username, email, password} = req.body;
          let user = await User.findOne({ email: email });
          if (user) {
              res.send({ message: "User already registered" });
          } else {
              user = new User({
                  name: username,
                  email: email,
                  password: password
              });
              await user.save();
              res.send({ message: "Successfully Registered, Please login now." });
          }
      } catch (err) {
          res.send(err);
      }
  });
  

app.listen(9002,() => {
    console.log("Backend started at port 8000")
})