import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CLink,
} from "@coreui/react";
import { Link } from "react-router-dom";
import {usersData} from "./UsersData";
import "./Users.css";
import * as BoxIcon from "react-icons/bi";
import * as RemixIcon from "react-icons/ri";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Users = (props:any) => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/);
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [onClickRow, setOnClickRow] = useState(true);
  console.log("For check",onClickRow);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Users
            <small className="text-muted"> example</small>
            <CButton
              color="success"
              className="buttonPosition"
              to="users/AddUserForms"
            >
              Add User
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={[
                { key: "name", _classes: "font-weight-bold" },
                "registered",
                "role",
                "status",
                "Actions",
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              onRowClick={(item) => onClickRow ? history.push(`/users/${item.id}`): null}
              clickableRows
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
                Actions: (item, index) => {
                  return (
                    <td>
                      <CLink to="/users/AddUserForms">
                        <CButton color="success" onMouseEnter={()=>setOnClickRow(false)} onMouseLeave={()=>setOnClickRow(true)}  className="customPadding">
                          <BoxIcon.BiEdit size={20}/>
                        </CButton>
                      </CLink>
                      <CButton onMouseEnter={()=>setOnClickRow(false)} onMouseLeave={()=>setOnClickRow(true)}  color="danger" to="/login">
                        <RemixIcon.RiDeleteBin6Line size={20}  />
                      </CButton>
                    </td>
                  );
                },
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Users;
