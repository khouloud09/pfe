const express = require('express');
const Annonce = require('../models/Annonce');
const router = express.Router();
const { annonceRules, validation } = require("../middelwares/validator");

const isAuth = require("../middelwares/passport");
const User = require('../models/User');

// get all annonce

router.get('/Annonces', async (req, res) => {

  try {
    const searchedAnnonce = await Annonce.find()
    res.send({ searchedAnnonce, msg: 'all annonce' })
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: 'error getting all annonce' })

  }
})

// add annonce 

router.post('/add', annonceRules(), validation, async (req, res) => {
  console.log(req)
  try {
    const newAnnonce = new Annonce(req.body)
    let result = await newAnnonce.save();
    res.status(200).send({ annonce: result, msg: 'annonce added successfully' })

  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: 'error saving annonce' })

  }
}
)


// get all annonce by filter
router.post('/allAnnonces', async (req, res) => {
  console.log(req.body)
  try {
    const result = await Annonce.find(req.body)
    res.send({ allAnnonces: result, msg: 'all Annonces' })

  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: 'error getting all annonce' })
  }
})
//get annonce by category
router.get("/:categorie", async (req, res) => {
  try {
    const result = await Annonce.find({ categorie: req.params.categorie })
    res.send({ annonces: result, msg: "get all annonce by category" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: 'error getting annonce by category' })

  }
});

// update annonce
router.put('/update/:id', async (req, res) => {
  console.log(req.body)
  try {
    const result = await Annonce.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    res.send({ annonce: result, msg: "annonce updated successfully" })

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not update the annonce" });

  }
})
//validation annonce
router.put('/update/valide/:id', async (req,res)=>
{
  try {
    const result = await Annonce.findByIdAndUpdate(
      {_id:req.params.id},
      {$set:{valide:true}},
      {new: true}
    );
    res.send({annonce:result, msg:"annonce updated successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not update the annonce" });
  }
})
// delete annonce
router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await Annonce.findByIdAndDelete({ _id: req.params.id, });
    res.send({ msg: "annonce deleted successfully" })
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not delete the annonce" })

  }
})
// get annonce by id
router.get("/get/:id", async (req, res) => {
  try {
    let result = await Annonce.findById(req.params.id);
    res.send({ annonce: result, msg: " annonce by id" });
  } catch (error) {
    console.log(error);
  }
});
// get annonce by id_user
router.get("/getAnn/:khouloud", async (req, res) => {
  try {
    let result = await Annonce.find({ id_user: req.params.khouloud });
    res.send({ userAnnonce: result, msg: " annonce by id_user" });
  } catch (error) {
    console.log(error);
  }
});
//get userAnnonce
router.get("/userannonce/:id", async (req, res) => {
  try {
    let result = await Annonce.find({ id_user: req.params.id })
      .populate("id_user", ["name", "lastName","email","phone"]);
    res.send({ userAnn: result, msg: "user's annonces" });
  } catch (error) {
    console.log(error);
  }
});
//add file to annonce
router.post("/addfiles", async (req, res) => {
  try {
    const newfiles = new Files({

      files: req.body.galerie,

    });
    let result = await newfiles.save();
    res.send({ result: result, msg: "files added" });
  } catch (error) {
    console.log(error);
  }
});


//  // update Favorites list
//  router.put("/addfavoris", async (req, res) => {


//   try {
//    const fav=await Annonce.findByIdAndUpdate(req.body.user_id.id,
//     { $push: { listFavoris: req.body.user_id.annonce}},
//     {safe: true, upsert: true,new:true})
//    res.status(200).send(fav)
//    } catch (error) {
//      console.log(error)
//    }
//  })

router.patch("/like/:id", async (req, res) => {

  try {
    const Favoris = await Annonce.findByIdAndUpdate(
      req.body.annonceId,
      {
        $addToSet: { likers: req.params.id },
      },
      { new: true },
      
    );
   

    res.status(200).send({Annonce:Favoris,user:ListFavoris})

  } catch (err) {
    return res.status(400).send(err);
  }
});
// remove like
router.patch("/unlike/:id", async (req, res) => {
    console.log(req.body);
  try {
    const Favoris = await Annonce.findByIdAndUpdate(
      req.body.annonceId,
      {
        $pull: { likers: req.params.id },
      },
      { new: true },
     
    );
    const ListFavoris = await User.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likes: req.body.annonceId },
      },
      { new: true },
     
    );
    res.status(200).send({Annonce:Favoris})
  } catch (err) {
    return res.status(400).send(err);
  }
});





module.exports = router