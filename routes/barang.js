const knex = require("../knexCon");
const response = require("../util/response");

const barang = {
  getAllBarang: async (req, res) => {
    const listBarang = await knex("barang").select();
    try {
      response.success(listBarang, res);
    } catch (error) {
      response.error(error, res);
    }
  },
  getDetailBarang: async (req, res) => {
    const nama_barang = req.query.nama_barang + "";
    const kode_barang = req.query.kode_barang;
    const id = req.query.id;

    if (nama_barang) {
      //console.log(nama_barang);
      const detailBarang = await knex("satuan")
        .join("barang", "barang.kode_barang", "=", "satuan.kode_barang")
        .select(
          "barang.nama_barang",
          "satuan.kode_satuan",
          "satuan.besar_konversi",
          "satuan.harga"
        )
        .where("barang.nama_barang", "like", `%${nama_barang.toUpperCase()}%`);
      response.success(detailBarang, res);
    }
    if (kode_barang) {
      const detailBarang = await knex("satuan")
        .join("barang", "barang.kode_barang", "=", "satuan.kode_barang")
        .select("satuan.kode_satuan", "satuan.besar_konversi", "satuan.harga")
        .where("barang.kode_barang", kode_barang);
      response.success(detailBarang, res);
    }

    if (id) {
      const detailBarang = await knex("satuan")
        .join("barang", "barang.kode_barang", "=", "satuan.kode_barang")
        .select("satuan.kode_satuan", "satuan.besar_konversi", "satuan.harga")
        .where("barang.id", id);
      response.success(detailBarang, res);
    }
  },
};

module.exports = barang;
