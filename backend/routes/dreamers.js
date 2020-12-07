const router = require("express").Router();
const { default: userEvent } = require("@testing-library/user-event");
let Dreamer = require("../models/dreamer.model");

router.route("/").get((req, res) => {
  Dreamer.find()
    .then((dreamers) => res.json(dreamers))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newDreamer = new Dreamer({ username });

  newDreamer
    .save()
    .then(() => res.json("Dreamer Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
