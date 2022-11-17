import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


// add listFavoris

export const addListFavoris = createAsyncThunk("fav/addfavorislist",async({id_user,list_Annonce })=> {
    try {
        let response = await axios.post("http://localhost:5000/fav/addfavorislist",{id_user,list_Annonce });
        return await response.data;
    } catch (error) {
        return error.response.data
    }
});
// add annonce to listFavoris
export const newAnnonceFavoris = createAsyncThunk("fav/addtifav/:id", async (id) => {
    try {
      let response = await axios.patch(`http://localhost:5000/fav/addtifav/${id}`);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  });
  // get user favorislist
  export const UserFavoris = createAsyncThunk("fav/userfav/:id", async (id) => {
    try {
      let response = await axios.post(`http://localhost:5000/fav/userfav/${id}`) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
  // delete annonceFavoris
  export const deleteFavAnnonce = createAsyncThunk("annonce/update/:id/:id_Ann", async ({id,id_Ann}) => {
    try {
      let response = await axios.put(`http://localhost:5000/fav/deletefav/${id}/${id_Ann}`) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
   
 

 

const initialState = {
    listFavoris: null,
    status:null,
   
};
  const FavorisSlice = createSlice({
    name: 'listFavoris',
    initialState,
    reducers: {
      
    },
    extraReducers:{
       // add listFavoris
        [addListFavoris.pending]: (state) => {
            state.status = "pending";
          },
          [addListFavoris.fulfilled]: (state,action) => {
            state.status = "success";
            state.listFavoris = action.payload?.newListFav;
          },
          [addListFavoris.rejected]: (state,action) => {
            state.status = "failed";
          
          },
       // add annonce to listFavoris
          [ newAnnonceFavoris.pending]: (state) => {
            state.status = "pending";
          },
          [ newAnnonceFavoris.fulfilled]: (state, action) => {
            state.status = "success";
            state.listFavoris = action.payload?.list;
          },
          [ newAnnonceFavoris.rejected]: (state) => {
            state.status = "failed";
          },
            // get user favorislist
          [UserFavoris.pending]: (state) => {
            state.status = "pending";
          },
          [UserFavoris.fulfilled]: (state, action) => {
            state.status = "success";
            state.userfav = action.payload?.userfav;
          },
          [UserFavoris.rejected]: (state) => {
            state.status = "failed";
          },
         
            // delete annonceFavoris  
          [deleteFavAnnonce.pending]: (state) => {
            state.status = "pending";
          },
          [deleteFavAnnonce.fulfilled]: (state, action) => {
            state.status = "success";
            state.deleteFav = action.payload?.deleleFav;
          },
          [deleteFavAnnonce.rejected]: (state) => {
            state.status = "failed";
          },
    },
  })
  

  export default FavorisSlice.reducer
