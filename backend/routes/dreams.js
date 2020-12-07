const router = require("express").Router();
let Dream = require("../models/dream.model");

router.route("/").get((req, res) => {
  Dream.find()
    .then((dreams) => res.json(dreams))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const theme = req.body.theme;
  const date = Date.parse(req.body.date);

  const newDream = new Dream({
    username,
    description,
    theme,
    date,
  });

  newDream
    .save()
    .then(() => res.json("Dream Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
