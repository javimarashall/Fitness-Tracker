const router = require("express").Router();
const Workout = require("../models");

router.post("/api/workout", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
module.exports = router;