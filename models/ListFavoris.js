const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ListFavorisSchema = new schema(
  {
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",

      },
    list_Annonce: [
      {
        id_annonce: { type: String,unique: true },
      }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ListFavoris", ListFavorisSchema);