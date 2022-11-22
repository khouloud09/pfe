import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import UserNav from './UserNav'
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import { deleteAnnonce, getAnnonceByIdUser } from '../../redux/Slices/AnnonceSlice';




const DashAnn = () => {

  const dispatch = useDispatch()
  const [ping, setPing] = useState(false);
  const user = useSelector((state) => state.user?.user)


  useEffect(() => {
    dispatch(getAnnonceByIdUser({ id_user: user?._id }))
  }, [dispatch]);

  const userAnnonce = useSelector(state => state.annonce?.userAnnonce)


  const annonceColumns = [
    { field: "_id", headerName: "ID", width: 70 },

    {
      field: "titre",
      headerName: "Annonce",
      width: 230,

    },
    {
      field: "createdAt",
      headerName: "Date de publication",
      width: 230,

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

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/details/${params.row.titre}`} state={{ annonce: params.row }} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() =>
                handleDelete(params.row._id)}
            >
              Delete
            </div>
            <Link to="/annonces/edit" state={{ annonce: params.row }} style={{ textDecoration: "none" }}>
              <div className="viewButton">
                Edit
              </div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
      <UserNav />
      <div className="listContainer ">
        <div className="datatable">
          <div className="datatableTitle">
            Add New Annonce
            <Link to="/annonce" className="link">
              Add New
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={userAnnonce || []}
            getRowId={(row) => row?._id}
            columns={annonceColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  )
}

export default DashAnn