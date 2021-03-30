import React from "react";
import { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import { getUserById } from "../../api/list";

const EditUserForms = (props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  //  let propsData = props.data;
  //const [users, setUsers] = useState([]);
  //console.log("User Detail props-> firstName:", props.userData);
  const [values, setValues]: any = useState([]);

  const [firstName, setFirstName] = useState("");
  //setFirstName(props.data)s

  useEffect(() => {
    console.log("User Detail props-> firstName:", props.userData);
    setValues({
      ...props.userData,
    });
  }, [props.userData, setValues]);

  // console.log("idUserArray:", values);

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

  //   const handleSubmit = () => {
  //     let user = {
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email,
  //       officePhone: officePhone,
  //       mobile: mobile,
  //       fax: fax,
  //     };
  //     console.log("From AddUserForm:", user);
  //     postUserData(user).then((res) => {
  //       if (responseHandler(res)) {
  //         alert("Submitted Successfully");
  //       }
  //     });
  //   };
  console.log("Input state:",values);
  const handleChange = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    if (
      targetName === "firstName" ||
      targetName === "lastName" ||
      targetName === "email" ||
      targetName === "officePhone" ||
      targetName === "fax"
    ) {
      setValues(value);
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
              <CForm>
                <CFormGroup>
                  <CLabel htmlFor="company">First Name</CLabel>
                  <CInput
                    id="company"
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
