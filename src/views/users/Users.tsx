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
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { Link } from "react-router-dom";
//import {usersData} from "./UsersData";
import "./Users.css";
import * as BoxIcon from "react-icons/bi";
import * as RemixIcon from "react-icons/ri";
import { deleteUser } from "../../api/delete";
import BasicForms from "./AddUserForms";
import { Modals } from "../model/model";
import EditUserForms from "./EditUser"

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

const Users = (props: any) => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/);
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [onClickRow, setOnClickRow] = useState(true);
  const data =[... props.userData];
  const [model, setModel] = useState(false);
  const [warning, setWarning] = useState(false);
  const [yes, setYes] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
  const [selectedUserData, setSelectedUserData] = useState([]);
  const [modelStateDelete, setModelStateDelete] = useState("");
  const [large, setLarge] = useState(false);
  

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);
  
  return (
    <>
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
                items={data}
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
                onRowClick={(items) =>
                  onClickRow ? history.push(`/users/${items.id}`) : null
                }
                clickableRows
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  Actions: (item, index) => {
                    return (
                      <td>
                        <CButton
                          color="success"
                          onClick={() => {
                            setSelectedUserData(item)
                            setLarge(!large)
                          }}
                          onMouseEnter={() => setOnClickRow(false)}
                          onMouseLeave={() => setOnClickRow(true)}
                          className="customPadding"
                        >
                          <BoxIcon.BiEdit size={20} />
                        </CButton>

                        <CButton
                          onClick={() => {
                          setModelStateDelete("Are you sure want to delete!!!")
                          setWarning(true)
                          setDeleteId(item.id)                          
                        }}
                        onMouseEnter={() => setOnClickRow(false)}
                        onMouseLeave={() => setOnClickRow(true)}
                        color="danger"
                      >
                        <RemixIcon.RiDeleteBin6Line size={20} />
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

    {/* Model warning*/}
    <CModal
      show={warning}
        color="danger"
        onClose={() => setWarning(!warning)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Delete User</CModalTitle>
        </CModalHeader>
        <CModalBody>{modelStateDelete}</CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={()=>{
              setWarning(!warning);
              deleteUser(deleteId)
              setDeleteId("")
              window.location.reload()
            }}
          >   
            Yes
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={() => {
              setWarning(!warning);
              setDeleteId("")
            }}
          >
            No
          </CButton>
        </CModalFooter>
      </CModal>

      {/* Model success*/}
      <CModal show={large} color="warning" onClose={() => setLarge(!large)} size="lg">
      <CModalHeader closeButton>
        <CModalTitle>Create User Status</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <EditUserForms userData={selectedUserData} />
      </CModalBody>
      <CModalFooter>
      </CModalFooter>
    </CModal>
    </>
  );
};

export default Users;
