const express = require('express');
const router = require("express").Router();
const { User } = require("../../db/models");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const { app } = require("../../app");
const cors = require('cors');

router.use(cors({ origin: 'http://localhost:3000', credentials: true }));
router.use(express.json());
router.use(cookieParser());



router.post("/register", async (req, res, next) => {
  try {
    // expects {username, email, password} in req.body
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ error: "Username, password, and email required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }

    const user = await User.create(req.body);
    // TODO potentially remove
    const token = jwt.sign(
      { id: user.dataValues.id },
      process.env.SESSION_SECRET,
      { expiresIn: 86400 }
    );

    const userData = {
      id: user.id,
      email: user.email,
      photoUrl: user.photoUrl,
      username: user.username
    }

    res
      .cookie('token', token, {
        sameSite: 'strict',
        expires: new Date(new Date().getTime() + 100 * 1000),
        httpOnly: true,
      })
      .json(userData, token);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(401).json({ error: "User already exists" });
    } else if (error.name === "SequelizeValidationError") {
      return res.status(401).json({ error: "Validation error" });
    } else next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    // expects username and password in req.body
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: "Username and password required" });

    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      console.log({ error: `No user found for username: ${username}` });
      res.status(401).json({ error: "Wrong username and/or password" });
    } else if (!user.correctPassword(password)) {
      console.log({ error: "Wrong username and/or password" });
      res.status(401).json({ error: "Wrong username and/or password" });
    } else {
      //TODO potentially remove
      const token = jwt.sign(
        { id: user.dataValues.id },
        process.env.SESSION_SECRET,
        { expiresIn: 86400 }
      );

      const userData = {
        id: user.id,
        email: user.email,
        photoUrl: user.photoUrl,
        username: user.username
      }

      res
      .cookie('token', token, {
        sameSite: 'strict',
        expires: new Date(new Date().getTime() + 100 * 1000),
        httpOnly: true,
      })
      .json(userData, token);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/logout", (req, res, next) => {
  res
    .status(202)
    .clearCookie('Name'.send("Cookies cleared"))
});

router.get("/user", (req, res, next) => {
  console.log(req.user)
  if (req.user) {
    return res.json(req.user);
  } else {
    return res.json({});
  }
});

module.exports = router;
