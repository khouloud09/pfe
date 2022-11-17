const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require("jsonwebtoken");
const { loginRules, registerRules, validation } = require("../middelwares/validator");
require("dotenv").config()

const isAuth = require("../middelwares/passport");
const ListFavoris = require('../models/ListFavoris');

// register

router.post('/register', registerRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User(req.body);
    // check if the email exist
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: 'this email address already exists' })
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);

    newUser.password = hashedPassword;
    console.log(newUser)
    // save the user
    const newUserToken = await newUser.save()
    //   const newList = new ListFavoris({ id_user: newUser._id, list_Annonce: [] });
    //   const favNewList =  await newList.save()
 

    // console.log(favNewList)
    // generate a token
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600 * 1000 * 24 * 7,
    });

    res.status(200).send({ newUserToken, msg: 'user is saved', token: `Bearer ${token}` });

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not save the user" });
  }
});


// login ===============================================================================================


router.post('/login', loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exists
    const searchedUser = await User.findOne({ email });
    // if the email is not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // generate a token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600 * 1000 * 24 * 7,
    });

    // send the user
    res.status(200).send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });



  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'can not get the user' });

  }

});
// get user by id
router.get("/get/:id", async (req, res) => {
  try {
    let result = await User.find({ id_user: req.params.id });
    res.send({ user: result, msg: " user by id" });
  } catch (error) {
    console.log(error);
  }
});
// get all user
router.get("/get", async (req, res) => {
  try {
    let result = await User.find()
    res.send({ users: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});
// delete user
router.delete("/delete/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete({ _id: req.params.id, });
    res.send({ msg: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error });
  }
});

//get current user
router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});
// Update user
router.put("/update/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ newProfile: result, msg: "profile updated.." });
  } catch (error) {
    res.status(500).send("cannot update the profile..");
    console.log(error);
  }
});
//Update user password
router.put("/updatePassword/:id", async (req, res) => {
  try {
    const newPassword = req.body.password;
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(newPassword, genSalt)

    let result = await User.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { password: hashedPassword } },
      { new: true }
    );
    res.status(200).send({ newPassword: result, msg: "password updated.." });
  } catch (error) {
    res.status(500).send("cannot update the profile..");
    console.log(error);
  }
});

module.exports = router;