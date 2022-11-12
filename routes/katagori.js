const knex = require("../knexCon");

const resp = (error, data) => {
  const responseData = {
    error: error,
    data: data,
  };
  return responseData;
};

const response = {
  success: (data, res) => {
    res.status(400).send(resp(false, data));
  },
  error: (error, res) => {
    res.status(400).send(resp(true, error));
  },
};

const katagori = {
  getKatagori: async (req, res) => {
    try {
      const listKatagori = await knex.select("*").from("katagori");
      const data = {
        error: false,
        data: listKatagori,
      };
      res.send(data);
    } catch (error) {
      const data = {
        error: true,
        data: error,
      };
      res.status(400).send(data);
    }
  },
  insertKatagori: async (req, res) => {
    const kode_katagori = req.body.kode_katagori + "";
    const nama_katagori = req.body.nama_katagori + "";

    const data = {
      kode_katagori: kode_katagori.toLocaleUpperCase(),
      nama_katagori: nama_katagori.toLocaleUpperCase(),
    };

    try {
      const insertKatagori = await knex("katagori").insert(data);
      response.success(insertKatagori, res);
    } catch (error) {
      response.error(error, res);
    }
  },
  updateKatagori: async (req, res) => {
    const id = req.body.id;
    const kode_katagori = req.body.kode_katagori + "";
    const nama_katagori = req.body.nama_katagori + "";

    try {
      const updateKatagori = await knex("katagori").where("id", id).update({
        kode_katagori: kode_katagori.toLocaleUpperCase(),
        nama_katagori: nama_katagori.toLocaleUpperCase(),
      });
      response.success(updateKatagori, res);
    } catch (error) {
      response.error(error, res);
    }
  },
};

module.exports = katagori;
