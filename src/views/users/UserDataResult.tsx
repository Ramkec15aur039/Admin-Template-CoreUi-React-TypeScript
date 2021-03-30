import { CButton } from "@coreui/react";
import React, { useState, useEffect } from "react";
import { getUserList } from "../../api/list";
import Users from "./Users";
import {storeUserDataAction} from "../../redux/actions/storeUserDataAction";
import { useSelector, useDispatch } from 'react-redux';
// import { useStore } from 'react-redux'

export default function UsersDataResult() {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = React.useState(0);
  const storeData:any = [];
  //console.log("User data from storedArray:", storeData);
  //console.log("From API:", users);
  
  
  const dispatch = useDispatch();
  //const store = useStore()
  //const reduxUserDetail = store.getState();
  //console.log("From redux store:",reduxUserDetail);
  dispatch(storeUserDataAction(storeData));
  
  /***********************************Response Handler****************************************/
  const responseHandler = (res) => {
    if (res) {
      if (res.code) {
        if (res.code === 400) {
          //console.log(console.log(res.message));
          return false;
        } else {
          //console.log("Bad Request");
          return false;
        }
      } else if (res.error) {
        //console.log(res.error);
        return false;
      } else {
        return res;
      }
    } else {
      return false;
    }
  };

  const initialUserData = () => {
    let currentPage = page + 1;
    getUserList({ currentPage, rowsPerPage }).then((res) => {
      if (responseHandler(res)) {
        setUsers(res.results);
        setTotalResults(res.totalResults);
      }
    });
  };

  useEffect(() => {
    initialUserData();
  }, []);

  users.map((item: any, index) => {
    storeData.push({
      id: item.id,
      firstName:item.firstName,
      lastName:item.lastName,
      name: item.firstName + " " + item.lastName,
      registered: item.createdAt,
      role: item.role,
      status: item.isActive ? "Active" : "Not Active",
      email: item.email,
      officePhone:item.officePhone,
      fax:item.fax,
      mobile:item.mobile
    });
  });
  return <Users userData={storeData} />;
}