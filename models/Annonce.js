const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AnnonceSchema = new schema({
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
        user_name:{
            type:String
        },
        typeAnnonce:{
            type:String,
            required:true,
        },
        categorie:{
            type:String,
            required:true, 
        },
        delegation:{
            type:[String] ,
            required:true
        },
        titre:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        prix: {
            type: String,
            required: true
        },
    duree:{
            type:[String] ,
            required:true
        },
        localisationMap: {
            lat: {
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            }
        },
        disponibilite: {
            type: Boolean,
            required: true,
            default:true,
        },
        galerie:{
            type:[{url:String}],
            required:true
        },
        options:{
            type:[String],
            required:true
        },
       
        surfaceHabitable: { type: String },
        surfaceTerrain: { type: String },
        nbrChambre: { type: Number, min: 0 },
        nbrSalleDeBain: { type: Number, min: 0 },   
        nbrPiece: { type: Number, min: 0 },
        nbrEtage: { type: Number, min: 0 },
        dateConstruction: { type: String },
        option: [String],
    },
    { timestamps: true }
    )

    module.exports = mongoose.model("Annonce", AnnonceSchema);