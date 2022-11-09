const express = require('express');
const Annonce =  require ('../models/Annonce');
const router = express.Router();
const {annonceRules,validation} = require("../middelwares/validator");

const isAuth = require("../middelwares/passport");

// get all annonce

router.get('/Annonces',async(req, res) => {

 try {
    const searchedAnnonce = await Annonce.find()
    res.send({searchedAnnonce,msg:'all annonce'})
 } catch (error) {
    console.log(error);
    res.status(400).send({msg:'error getting all annonce'})
      
 }
})

// add annonce 
 
router.post('/add',annonceRules(),validation, async (req, res) => {
    try {
        const newAnnonce = new Annonce(req.body)
        let result = await newAnnonce.save();
        res.send({annonce:result,msg:'annonce added successfully'})
        
    } catch (error) {
        console.log(error);
        res.status(400).send({msg:'error saving annonce'})
        
    }
}
    )

    
// get all annonce by filter
router.post('/allAnnonces', async (req, res)=> {
  console.log(req.body)
    try {
        const result = await Annonce.find(req.body)
        res.send({allAnnonces:result,msg:'all Annonces'})
        
    } catch (error) {
        console.log(error);
        res.status(400).send({msg:'error getting all annonce'}) 
    }
})
//get annonce by category
router.get("/:categorie", async (req, res) => {
    try {
      const result = await Annonce.find({ categorie: req.params.categorie })
      res.send({ annonces: result, msg: "get all annonce by category" });
    } catch (error) {
      console.log(error);
      res.status(400).send({msg:'error getting annonce by category'})

    }
  });

// update annonce
router.put('/update/:id',async(req,res) => {
  console.log(req.body)
    try {
        const result = await Annonce.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
        res.send({annonce:result,msg:"annonce updated successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "can not update the annonce" });

    }
})
// delete annonce
router.delete('/delete/:id',async (req,res) => {
    try {
        const result = await Annonce.findByIdAndDelete({ _id: req.params.id,});
        res.send({msg:"annonce deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "can not delete the annonce"})
        
    }
})
//add file to annonce
router.post("/addfiles", async (req, res) => {
    try {
      const newfiles= new Files({
       
        files: req.body.galerie,
    
      });
      let result = await newfiles.save();
      res.send({ result: result, msg: "files added" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router