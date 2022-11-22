import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from 'react'
import { Link } from "react-router-dom";

import {  useDispatch, useSelector } from "react-redux";
import { deleteAnnonce, validationAnnonce } from "../../../redux/Slices/AnnonceSlice";
import Sidebar from "../Sidebar/Sidebar";
import NavbarDash from "../Navbar/NavbarDash";

const UsersAnnonce = () => {
    const dispatch =useDispatch()
    const Annonces = useSelector((state)=>state?.annonce?.annonces);
    const [ping, setPing] = useState(false);


   const annonceColumns = [
        { field: "_id", headerName: "ID", width: 70 },
        {
          field: "user_name",
          headerName: "User_Name",
          width: 230,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
             {params.row.user_name}
              </div>
            );
          },
        },
        {
            field: "titre",
            headerName: "Annonce",
            width: 230,
            // renderCell: (params) => {
            //   return (
            //     <div className="cellWithImg">
            //       <h1>{params.row.titre}</h1>
            //     </div>
            //   );
            // },
          },
        {
          field: "createdAt",
          headerName: "Date de publication",
          width: 230,
       
        },
      
        {
          field: "typeAnnonce",
          headerName: "Type de l'annonce",
          width: 100,
     
        },
        {
            field: "categorie",
            headerName: "Categorie",
            width: 100,
          
          },
        {
          field: "valide",
          headerName: "Status",
          width: 160,
     
        },
      ];
      
 

  const handleDelete = (id) => {
    dispatch(deleteAnnonce(id));
    setPing(!ping);
  };
  const handleUpdate = (id) => {
    dispatch(validationAnnonce(id));
    setPing(!ping);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/details/${params.row.titre}`} state={{annonce:params.row}} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => 
                handleDelete(params.row._id)}
            >
              Delete
            </div>
            <Link to="/annonces/edit" state={{annonce:params.row}} style={{ textDecoration: "none" }}>
            <div className="editButton">
              Edit
            </div>
            </Link>
            <div className="updateButton" onClick={()=> (handleUpdate(params.row._id))}>
            update 
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavbarDash/>
    <div className="datatable">
      <div className="datatableTitle">
        Add New Annonce
        <Link to="/annonce" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={Annonces|| []}
        getRowId={(row)=> row?._id}
        columns={annonceColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </div>
    </div>
    </>
  );
};

export default UsersAnnonce;