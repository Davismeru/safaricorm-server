const express = require("express");
const router = express.Router();
const { data } = require("../models");

router.post("/", async (req, res) => {
  const { number, referer_code } = req.body;
  console.log(referer_code);

  const code = Math.floor(Math.random() * 10000000);
  await data.create({
    number: number,
    code: code,
    referer_code: referer_code,
  });

  res.json(code);
});

// confirm number
router.post("/confirm", async (req, res) => {
  const { number } = req.body;
  const existing = await data.findOne({ where: { number: number } });
  existing
    ? res.json({
        error: "Phone number already used, please try another number",
      })
    : res.json("success");
});

router.get("/get_data/:mycode", async (req, res) => {
  const mycode = req.params.mycode;
  const myRefferals = await data.findAll({ where: { referer_code: mycode } });
  res.json(myRefferals);
});

module.exports = router;
