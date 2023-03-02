const express = require("express");
const router = express.Router();

const mw = require("./tarifler-middleware");

router.get("/:id", mw.checkTarifId, (req, res, next) => {
  try {
    res.json(req.tarif);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
