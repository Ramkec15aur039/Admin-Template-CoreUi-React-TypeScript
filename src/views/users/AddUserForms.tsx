import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useState } from "react";

/***************** API import *********************/
import { postUserData } from "../../api/create";
import { getUserList } from "../../api/list";


const BasicForms = (props: any) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  const [modelState, setModelState] = useState("");

  /*********************************** Add User State ****************************************/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [officePhone, setofficePhone] = useState("");
  const [mobile, setmobile] = useState("");
  const [fax, setfax] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [large, setLarge] = useState(false);
  const [page, setPage] = React.useState(0);

  /***********************************Response Handler****************************************/
  const responseHandler = (res) => {
    if (res) {
      if (res.code) {
        if (res.code === 400) {
          console.log(res.message);
          return false;
        } else {
          console.log("Bad Request");
          return false;
        }
      } else if (res.error) {
        console.log(res.error);
        return false;
      } else {
        return res;
      }
    } else {
      return false;
    }
  };

  const handleChange = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;

    if (targetName === "firstName") {
      setFirstName(value);
    }
    if (targetName === "lastName") {
      setLastName(value);
    }
    if (targetName === "email") {
      setEmail(value);
    }
    if (targetName === "officePhone") {
      setofficePhone(value);
    }
    if (targetName === "mobile") {
      setmobile(value);
    }
    if (targetName === "fax") {
      setfax(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      officePhone: officePhone,
      mobile: mobile,
      fax: fax,
    };
    postUserData(user).then((res) => {
      if (responseHandler(res)) {
        setModelState("Submited successfully!!!");
        setLarge(true);
        let currentPage = page + 1;
        getUserList(currentPage);
      } else {
        setModelState(res.error ? res.error : res.message);
        setLarge(true);
      }
    });
  };

  return (
    <>
      <CRow>
        <CCol lg="8" xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Add User
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CFormGroup>
                  <CLabel htmlFor="company">First Name</CLabel>
                  <CInput
                    id="company"
                    placeholder="Enter First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={firstName}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Last Name</CLabel>
                  <CInput
                    id="vat"
                    placeholder="Enter Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={lastName}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="street">Email</CLabel>
                  <CInput
                    id="street"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                  />
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="city">Office Phone</CLabel>
                      <CInput
                        id="city"
                        placeholder="Office Phone Number"
                        name="officePhone"
                        onChange={handleChange}
                        value={officePhone}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="8">
                    <CFormGroup>
                      <CLabel htmlFor="postal-code">Mobile</CLabel>
                      <CInput
                        id="postal-code"
                        placeholder="Mobile Number"
                        name="mobile"
                        onChange={handleChange}
                        value={mobile}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="country">Fax</CLabel>
                  <CInput
                    id="country"
                    placeholder="Fax"
                    name="fax"
                    onChange={handleChange}
                    value={fax}
                  />
                </CFormGroup>
                <CButton type="submit" color="primary">
                  Submit
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/********************** Model Add User ***********************/}
      <CModal
        show={large}
        color="success"
        onClose={() => setLarge(!large)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Create User Status</CModalTitle>
        </CModalHeader>
        <CModalBody>{modelState}</CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={() => setLarge(!large)}
            to="/users"
          >
            ok
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default BasicForms;
