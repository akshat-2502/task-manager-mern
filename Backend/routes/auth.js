const User = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//Sign UP
router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, password: hashpassword, username });
    await user.save().then(() => {
      res.status(200).json({ user: user });
    });
  } catch (error) {
    res.status(400).json({ message: "User Already Exist" });
  }
});

//SIGN IN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: "Please Register !" });
    }
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Incorrect Password !" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something Went Wrong :( Please Try Again" });
  }
});

module.exports = router;
