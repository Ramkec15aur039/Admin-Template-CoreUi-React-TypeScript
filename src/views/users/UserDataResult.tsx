import { CButton } from "@coreui/react";
import React, { useState, useEffect } from "react";
import { getUserList } from "../../api/list";
import Users from "./Users";

export default function UsersDataResult() {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = React.useState(0);
  
    /***********************************Response Handler****************************************/
    const responseHandler = (res) => {
      if (res) {
        if (res.code) {
          if (res.code === 400) {
            // alert(console.log(res.message));
            return false;
          } else {
            // alert("Bad Request");
            return false;
          }
        } else if (res.error) {
        //   alert(res.error);
          return false;
        } else {
          return res;
        }
      } else {
        return false;
      }
    };

  const initialUserData = () => {
    // let lastName = search ? search : null;
    let sortBy = "lastName:asc";
    let currentPage = page + 1;
    getUserList({ sortBy, currentPage, rowsPerPage }).then((res) => {
      if (responseHandler(res)) {
        setUsers(res.results);
        setTotalResults(res.totalResults);
        // setLoading(false);
      }
    });
  };

  useEffect(() => {
    initialUserData();
  }, []);

  const usersData1 = [
    {
      id: 0,
      name: "John Doe",
      registered: "2018/01/01",
      role: "Guest",
      status: "Pending",
    },
  ];
  return(
      <Users userData={usersData1}/>
  );
}