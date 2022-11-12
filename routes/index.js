const express = require("express");
const router = express.Router();

//katagori
const katagori = require("./katagori");
router.get("/getKatagori", katagori.getKatagori);
router.post("/insertKatagori", katagori.insertKatagori);
router.put("/updateKatagori", katagori.updateKatagori);

module.exports = router;
