const express = require("express");
const router = express.Router();

//katagori
const katagori = require("./katagori");
router.get("/getKatagori", katagori.getKatagori);
router.post("/insertKatagori", katagori.insertKatagori);
router.put("/updateKatagori", katagori.updateKatagori);

//barang
const barang = require("./barang");
router.get("/getAllBarang", barang.getAllBarang);
router.get("/getDetailBarang", barang.getDetailBarang);

module.exports = router;
