import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
// add a new annonce

export const addAnnonce = createAsyncThunk("annonce/add",async(annonce)=> {
    try {
        let response = await axios.post("http://localhost:5000/annonce/add",annonce);
        return await response.data;
    } catch (error) {
        return error.response.data
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
  export const updateAnnonce = createAsyncThunk("annonce/update/:id", async ({id,annonce}) => {
    try {
      let response = await axios.put(`http://localhost:5000/annonce/update/${id}`,annonce) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
   // validation annonce
   export const validationAnnonce = createAsyncThunk("annonce/update/valide/:id", async (id) => {
    try {
      let response = await axios.put(`http://localhost:5000/annonce/update/valide/${id}`) 
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

  export const addFavoris = createAsyncThunk("AddFavorisToUser",async(id,annonce)=>{
    try {
      let response = await axios.put(`http://localhost:5000/annonce/addfavoris`,{user_id:id,annonce})
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
  
  )

  export const getAnnonceById = createAsyncThunk("annonce/getbyid", async ({id}) => {
    try {
      let response = await axios.get(`http://localhost:5000/annonce/get/${id}`) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
  
  export const getAnnonceByIdUser = createAsyncThunk("annonce/getbyiduser", async ({id_user}) => {
    try {
      let response = await axios.get(`http://localhost:5000/annonce/getAnn/${id_user}`) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
  //get userAnnonce
  export const getUserAnnonce= createAsyncThunk("annonce/userAnn/:id", async ({id_user}) => {
    
    try {
      let response = await axios.get(`http://localhost:5000/annonce/userannonce/${id_user}`) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
  

const initialState = {
    annonce: null,
    status:null,
    annonces: null,
    favoris:[],
    userAnnonce:null,
   userAnn:[],
  
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
          [addAnnonce.rejected]: (state,action) => {
            state.status = "failed";
            state.errors= action.payload?.errors
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
           // validation annonce
           [validationAnnonce.pending]: (state) => {
            state.status = "pending";
          },
          [validationAnnonce.fulfilled]: (state, action) => {
            state.status = "success";
            state.annonce = action.payload?.annonce;
          },
          [validationAnnonce.rejected]: (state) => {
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
               // get annonce by id
          [getAnnonceById.pending]: (state) => {
            state.status = "pending";
          },
          [getAnnonceById.fulfilled]: (state, action) => {
            state.status = "success";
            // console.log(state.favoris?.filter(el=>el?._id==action.payload?.annonce?._id)[0]._id)
            if (!!state.favoris?.filter(el=> el?._id===action.payload?.annonce?._id)) {
              state.favoris.push(action.payload?.annonce);}
            // state.favoris.push(action.payload?.annonce) ;
          },
          [getAnnonceById.rejected]: (state) => {
            state.status = "failed";
          },
           // get annonce by id_user
          [getAnnonceByIdUser.pending]: (state) => {
            state.status = "pending";
          },
          [getAnnonceByIdUser.fulfilled]: (state, action) => {
            state.status = "success";
            state.userAnnonce = action.payload?.userAnnonce;
          },
          [getAnnonceByIdUser.rejected]: (state) => {
            state.status = "failed";
          },
            //get userAnnonce
            [getUserAnnonce.pending]: (state) => {
              state.status = "pending";
            },
            [getUserAnnonce.fulfilled]: (state, action) => {
              state.status = "success";
              state.userAnn = action.payload?.userAnn;
             
             
            },
            [getUserAnnonce.rejected]: (state) => {
              state.status = "failed";
            },
    },
  })
  

  export default AnnonceSlice.reducer