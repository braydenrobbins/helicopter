const express = require("express");
const router = express.Router();
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Helicopter = require("../models/Helicopter");

//GET
router.get("/", (req, res) => {
  Helicopter.find().exec((err, helicopters) => {
    if (err) {
      console.error("Couldn't get helicopters", err);
      res.status(500).send("Server Error");
    } else {
      res.json(helicopters);
    }
  });
});

module.exports = router;

//POST
router.post(
  "/",
  [
    check("type", "Please add a Type")
      .not()
      .isEmpty(),
    check("model", "Please add the Model")
      .not()
      .isEmpty(),
    check("capWeight", "Please add the Capacity Weight")
      .not()
      .isEmpty(),
    check("crewMin", "Please add the Crew Minimum")
      .not()
      .isEmpty(),
    check("crewMax", "Please add Crew Maximum")
      .not()
      .isEmpty(),
    check("heliHeight", "Please add the height of the Helicopter")
      .not()
      .isEmpty(),
    check("rotorDiam", "Please add the diamater of the Rotor")
      .not()
      .isEmpty(),
    check("fuseLength", "Please add the length of the fuselage")
      .not()
      .isEmpty(),
    check("maxSpeed", "Please add the max speed")
      .not()
      .isEmpty(),
    check("src", "Please add an image")
      .not()
      .isEmpty()
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      type,
      model,
      capHeight,
      crewMax,
      crewMin,
      fuseLength,
      heliHeight,
      rotorDiam,
      maxSpeed,
      src
    } = req.body;

    try {
      let helicopter = await Helicopter.findOne({ model });
      if (helicopter)
        res.status(400).json({ msg: "Helicopter already exists" });

      helicopter = new Helicopter({
        type,
        model,
        capHeight,
        crewMax,
        crewMin,
        fuseLength,
        heliHeight,
        rotorDiam,
        maxSpeed,
        src
      });

      await helicopter.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

//PUT
router.put("/:id", auth, async (req, res) => {
  const {
    type,
    model,
    capHeight,
    crewMax,
    crewMin,
    fuseLength,
    heliHeight,
    rotorDiam,
    maxSpeed,
    src
  } = req.body;

  const helicopterFields = {
    type: type,
    model: model,
    capHeight: capHeight,
    crewMax: crewMax,
    crewMin: crewMin,
    fuseLength: fuseLength,
    heliHeight: heliHeight,
    rotorDiam: rotorDiam,
    maxSpeed: maxSpeed,
    src: src
  };

  try {
    let helicopter = await Helicopter.findByIdAndUpdate(
      req.params.id,
      { $set: helicopterFields },
      { new: true }
    );
    res.json(helicopter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//DELETE
router.delete("/:id", auth, async (req, res) => {
  try {
    await Helicopter.findByIdAndRemove(req.params.id);
    res.json({ msg: "Contact removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
