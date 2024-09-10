const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name: String,
        price: String,
        image: String,
        vendorid: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", schema);