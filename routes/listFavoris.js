const express = require('express');
const ListeFavoris =  require ('../models/ListFavoris');
const router = express.Router();
const User = require('../models/User');
const Annonce =  require ('../models/Annonce');
const ListFavoris = require('../models/ListFavoris');

// // add listFavoris
 
// // router.post('/addfavorislist', async (req, res) => {
// //   const {id_user,list_Annonce } = req.body;
// //     try {
// //       const newList = new ListFavoris(req.body  );
// //       const searchedList= await ListFavoris.findOne({id_user})
// //    console.log(searchedList)
// //       if (searchedList) {
// //         return res.status(400).send({msg:' already exists'})
// //     }
   
// //     const newListFav = await newList.save();
// //     res.status(200).send({newListFav, msg:'list is created'});
        
// //     } catch (error) {
// //         console.log(error);
// //         res.status(400).send({msg:'error saving list'})
        
// //     }
// // }
// //     )
// // add a annonce to ListFavoris
//     router.patch('/addtifav/:id',async(req,res) => {
     
//         try {
//           const newAnnonce = req.body
//             const result = await ListFavoris.findOneAndUpdate({id_user:req.params.id},
//               {$addToSet:{ list_Annonce:newAnnonce}},{new:true});
//             res.send({list:result,msg:"annonce updated successfully"})
            
//         } catch (error) {
//             console.log(error);
//             res.status(500).send({ msg: "can not update the annonce" });
    
//         }
//     })
  

//     // get user favorislist
// router.get('/userfav/:id', async (req, res)=> {
 
//     try {
//         const result = await ListFavoris.findOne({id_user:req.params.id}).select("list_Annonce")
//         res.send({userfav:result,msg:'all Annonces'})
        
//     } catch (error) {
//         console.log(error);
//         res.status(400).send({msg:'error getting all annonce'}) 
//     }
// })

// router.put("/deletefav/:id/:id_fav", async (req, res) => {
//   try {
//     const List = await ListFavoris.findOne({_id:req.params.id})
//     const favorites = List.list_Annonce;
//     const ToDelete =  favorites.filter((el) => el._id != req.params.id_fav);
//     console.log(ToDelete)
//     const result = await ListFavoris.findOneAndUpdate({_id:req.params.id},{$set:{list_Annonce:ToDelete}} , {new: true})
//     res.send({deleleFav:result})
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({msg:'error getting all annonce'}) 
//   }
// })



module.exports = router