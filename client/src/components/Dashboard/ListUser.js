
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";

import {  useDispatch, useSelector } from "react-redux";
import "./ListUser.css"
import { deleteUser } from "../../redux/Slices/UserSlice";
import { useState } from "react";

const ListUser = () => {
    const dispatch =useDispatch()
    const Users = useSelector((state)=>state.user?.users);
    const [ping, setPing] = useState(false);
  
console.log(Users)
   const userColumns = [
        { field: "_id", headerName: "ID", width: 70 },
        {
          field: "name",
          headerName: "Name",
          width: 230,
          // renderCell: (params) => {
          //   return (
          //     <div className="cellWithImg">
          //       {params.row?.name}
          //     </div>
          //   );
          // },
        },
        {
            field: "lastName",
            headerName: "LastName",
            width: 230,
          },
        {
          field: "email",
          headerName: "Email",
          width: 230,
        },
      
        {
          field: "phone",
          headerName: "phone",
          width: 100,
        },
        {
            field: "adress",
            headerName: "Adress",
            width: 100,
          },
        {
          field: "status",
          headerName: "Status",
          width: 160,
          // renderCell: (params) => {
          //   return (
          //     <div className={`cellWithStatus ${params.row.status}`}>
          //       {params.row.status}
          //     </div>
          //   );
        //   },
        },
      ];
      
 

  const handleDelete = (id) => {
    
    dispatch(deleteUser(id));
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
            <Link to="/users/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => 
                handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/register" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={Users}
        getRowId={(row)=> row._id}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </>
  );
};

export default ListUser;