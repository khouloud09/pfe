import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

// add a new user

export const userRegister = createAsyncThunk("user/register",async(user)=> {
    try {
        let response = await axios.post("http://localhost:5000/user/register",user);
  
        return await response.data;
    } catch (error) {
        console.log(error);
    }
});
// connect user
export const userLogin = createAsyncThunk("user/login", async (user) => {
    try {
      let response = await axios.post("http://localhost:5000/user/login", user);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  });
  // current user
  export const userCurrent = createAsyncThunk("user/current", async () => {
    
    try {
      let response = await axios.get("http://localhost:5000/user/current", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return  response.data;
    } catch (error) {
      console.log(error);
    }
  });
  // get user by id
export const getUserByID = createAsyncThunk("user/get/:id", async (id) => {
  try {
    let response = await axios.get(`http://localhost:5000/user/get/${id}`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});
// get user by idAnnonce
export const getUserByIDAnn = createAsyncThunk("user/getAnn/:id", async ({id_Annonce}) => {

  try {
    let response = await axios.get(`http://localhost:5000/user/getAnn/${id_Annonce}`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});
  // get all users
  export const getUser = createAsyncThunk("user/get/", async () => {
    try {
      let response = await axios.get("http://localhost:5000/user/get");
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  });
    // delete user
    export const deleteUser = createAsyncThunk("user/delete/", async (id) => {
     
         try {
        let response = await axios.delete(`http://localhost:5000/user/delete/${id}`);
        return await response.data;
      } catch (error) {
        console.log(error);
      }
    });
    // update user
    export const updateUser = createAsyncThunk("user/update", async ({id,update}) => {
     
      try {
     let response = await axios.put(`http://localhost:5000/user/update/${id}`,update);
     return await response.data;
   } catch (error) {
     console.log(error);
   }
 });
 // update password
 export const updateUserPassword = createAsyncThunk(
  "user/updatePassword",
  async ({id,password}) => {
    try {
      let response = await axios.put(
        `http://localhost:5000/user/updatePassword/${id}`,
        password
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const likeAnnonce = createAsyncThunk("annonce/like", async ({id_user,annonceId}) => {

  try {
    let response = await axios.patch(`http://localhost:5000/annonce/like/${id_user}`,annonceId) 
      return response.data;
  } catch (error) {
      console.log(error)
  }
});
export const unLikeAnnonce = createAsyncThunk("annonce/unlike", async ({id_user,annonceId}) => {

  try {
    let response = await axios.patch(`http://localhost:5000/annonce/unlike/${id_user}`,annonceId) 
      return response.data;
  } catch (error) {
      console.log(error)
  }
});
const initialState = {
    user: null,
    status:null,
    users:[],

    searchedUser:null,
    searchedUserAnn :null,
    newuserupdated: {},

    userUpdated: null,
  }
  
  const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("token");
          },
    },
    extraReducers:{
      // add a new user
        [userRegister.pending]: (state) => {
            state.status = "pending";
          },
          [userRegister.fulfilled]: (state,action) => {
            console.log(action.payload)
            state.status = "success";
            state.user = action.payload.newUserToken;
            localStorage.setItem("token", action.payload?.token);
          },
          [userRegister.rejected]: (state) => {
            state.status = "failed";
          },
          // connect user
          [userLogin.pending]: (state) => {
            state.status = "pending";
          },
          [userLogin.fulfilled]: (state, action) => {
            state.status = "success";
            state.user = action.payload?.user;
            localStorage.setItem("token", action.payload?.token);
          },
          [userLogin.rejected]: (state) => {
            state.status = "failed";
          },
            // current user
          [userCurrent.pending]: (state) => {
            state.status = "pending";
          },
          [userCurrent.fulfilled]: (state, action) => {
            state.status = "success";
            state.user = action.payload?.user;
          },
          [userCurrent.rejected]: (state) => {
            state.status = "failed";
          },
          // get user by id
          [getUserByID.fulfilled]: (state, action) => {
            state.status = "success";
            
            state.searchedUser = action.payload?.user;
          },
          [getUserByID.rejected]: (state) => {
            state.status = "failed";
          },
          [getUserByID.pending]: (state) => {
            state.status = "pending";
          },
           // get user by idAnnonce
           [getUserByIDAnn.fulfilled]: (state, action) => {
            state.status = "success";
            
            state.searchedUserAnn = action.payload?.user;
          },
          [getUserByIDAnn.rejected]: (state) => {
            state.status = "failed";
          },
          [getUserByIDAnn.pending]: (state) => {
            state.status = "pending";
          },
            // get all users
            [getUser.fulfilled]: (state, action) => {
              state.status = "success";
              state.users = action.payload?.users;
            },
            [getUser.rejected]: (state) => {
              state.status = "failed";
            },
            [getUser.pending]: (state) => {
              state.status = "pending";
            },
             // delete user
             [deleteUser.fulfilled]: (state, action) => {
              state.status = "success";
              state.searchedUser = action.payload?.user;
            },
            [deleteUser.rejected]: (state) => {
              state.status = "failed";
            },
            [deleteUser.pending]: (state) => {
              state.status = "pending";
            },
            [updateUser.pending]: (state) => {
              state.status = "pending";
           
            },
            [updateUser.fulfilled]: (state, action) => {
              state.status = "success";
              state.newuserupdated = action.payload?.userUpdated;
             
             
            },
            [updateUser.rejected]: (state) => {
              state.status = "fail";
           
            },
            // update password
            [updateUserPassword.pending]: (state) => {
              state.status = "pending";
            },
            [updateUserPassword.fulfilled]: (state) => {
              state.status = "success";
          
            },
            [updateUserPassword.rejected]: (state) => {
              state.status = "fail";
            },
             // like annonce
          [likeAnnonce.pending]: (state) => {
            state.status = "pending";
          },
          [likeAnnonce.fulfilled]: (state, action) => {
            state.status = "success";
             state.user = action.payload?.user;
            
          },
          [likeAnnonce.rejected]: (state) => {
            state.status = "failed";
          },
            // unlike annonce
            [unLikeAnnonce.pending]: (state) => {
              state.status = "pending";
            },
            [unLikeAnnonce.fulfilled]: (state, action) => {
              state.status = "success";
              console.log(action.payload)
               state.user = action.payload?.user;
            },
            [unLikeAnnonce.rejected]: (state) => {
              state.status = "failed";
            },
    },
  })
  
  export const {logout } = UserSlice.actions
  export default UserSlice.reducer