import React from "react";
import { useState, useEffect } from "react";
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
} from "@coreui/react";
import { updateUserData } from "../../api/updates";

const EditUserForms = (props) => {
  const [values, setValues]: any = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [officePhone, setOfficePhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [role, setRole] = useState("");

  //To set "User Data value" from "props" to "State"
  useEffect(() => {
    console.log("User Detail props-> firstName:", props.userData);
    if (props.userData !== undefined) {
      setValues({
        ...props.userData,
      });
    }
  }, [props.userData, setValues]);

  /***********************************Response Handler****************************************/
  const responseHandler = (res) => {
    if (res) {
      if (res.code) {
        if (res.code === 400) {
          console.log(console.log(res.message));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      firstName: firstName || props.userData.firstName,
      lastName: lastName || props.userData.lastName,
      email: email || props.userData.email,
      officePhone: officePhone || props.userData.officePhone,
      mobile: mobile || props.userData.mobile,
      fax: fax || props.userData.fax,
      role: role || props.userData.role
    };
    console.log("From EditUserForm Submit section:", user);
    updateUserData(user, props.userData.id).then((res) => {
      if (responseHandler(res)) {
        props.getUpdatedData();
      } else {
        console.log("Updation failed!!!");
      }
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const targetName = e.target.name;
    const value = e.target.value;
    if (targetName === "firstName") {
      setValues(value);
      setFirstName(value);
    }
    if (targetName === "lastName") {
      setValues(value);
      setLastName(value);
    }
    if (targetName === "email") {
      setValues(value);
      setEmail(value);
    }
    if (targetName === "officePhone") {
      setValues(value);
      setOfficePhone(value);
    }
    if (targetName === "mobile") {
      setValues(value);
      setMobile(value);
    }
    if (targetName === "fax") {
      setValues(value);
      setFax(value);
    }
    if (targetName === "role") {
      setValues(value);
      setRole(value);
    }
  };

  return (
    <>
      <CRow>
        <CCol lg="12" xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Edit User
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CFormGroup>
                  <CLabel htmlFor="company">First Name</CLabel>
                  <CInput
                    id="firstName"
                    placeholder="Enter First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Last Name</CLabel>
                  <CInput
                    id="vat"
                    placeholder="Enter Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="street">Email</CLabel>
                  <CInput
                    id="street"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
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
                        value={values.officePhone}
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
                        value={values.mobile}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="country">Fax</CLabel>
                      <CInput
                        id="country"
                        placeholder="Fax"
                        name="fax"
                        onChange={handleChange}
                        value={values.fax}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="country">Role</CLabel>
                      <CInput
                        id="country"
                        placeholder="role"
                        name="role"
                        onChange={handleChange}
                        value={values.role}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CButton type="submit" color="primary">
                  Submit
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default EditUserForms;
