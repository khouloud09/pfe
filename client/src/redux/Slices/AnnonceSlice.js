import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
// add a new annonce

export const addAnnonce = createAsyncThunk("annonce/add",async(annonce)=> {
    try {
        let response = await axios.post("http://localhost:5000/annonce/add",annonce);
  
        return await response.data;
    } catch (error) {
        console.log(error);
    }
});
// get all annonce
export const allAnnonces = createAsyncThunk("annonce/Annonces", async () => {
    try {
      let response = await axios.get("http://localhost:5000/annonce/Annonces");
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  });
  // get annonce by filter
  export const annonceFilter = createAsyncThunk("annonce/annoncefilter", async (text) => {
    try {
      let response = await axios.post("http://localhost:5000/annonce/allAnnonces",text) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
  // update annonce
  export const updateAnnonce = createAsyncThunk("annonce/update/:id", async (id) => {
    try {
      let response = await axios.put(`http://localhost:5000/annonce/update/${id}`) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
   // delete annonce
   export const deleteAnnonce = createAsyncThunk("annonce/delete/:id", async (id) => {
    try {
      let response = await axios.delete(`http://localhost:5000/annonce/delete/${id}`) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
const initialState = {
    annonce: null,
    status:null,
    annonces: null,
  }
  
  const AnnonceSlice = createSlice({
    name: 'annonce',
    initialState,
    reducers: {
      
    },
    extraReducers:{
        //add a new annonce
        [addAnnonce.pending]: (state) => {
            state.status = "pending";
          },
          [addAnnonce.fulfilled]: (state,action) => {
            state.status = "success";
            state.annonce = action.payload?.annonce;
          },
          [addAnnonce.rejected]: (state) => {
            state.status = "failed";
          },
          //get all annonces
          [allAnnonces.pending]: (state) => {
            state.status = "pending";
          },
          [allAnnonces.fulfilled]: (state, action) => {
            state.status = "success";
            state.annonces = action.payload?.searchedAnnonce;
          },
          [allAnnonces.rejected]: (state) => {
            state.status = "failed";
          },
           //get annonce by filter
          [annonceFilter.pending]: (state) => {
            state.status = "pending";
          },
          [annonceFilter.fulfilled]: (state, action) => {
            state.status = "success";
            state.annonces = action.payload?.allAnnonces;
          },
          [annonceFilter.rejected]: (state) => {
            state.status = "failed";
          },
          // update annonce
          [updateAnnonce.pending]: (state) => {
            state.status = "pending";
          },
          [updateAnnonce.fulfilled]: (state, action) => {
            state.status = "success";
            state.annonce = action.payload?.annonce;
          },
          [updateAnnonce.rejected]: (state) => {
            state.status = "failed";
          },
           // delete annonce
           [deleteAnnonce.pending]: (state) => {
            state.status = "pending";
          },
          [deleteAnnonce.fulfilled]: (state, action) => {
            state.status = "success";
            state.annonce = action.payload?.annonce;
          },
          [deleteAnnonce.rejected]: (state) => {
            state.status = "failed";
          },
    },
  })
  

  export default AnnonceSlice.reducer