import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
//import { usersData } from "./UsersData";
import { TestAction } from "../../redux/actions/testAction";
import { useSelector, useDispatch } from "react-redux";
import { useStore } from "react-redux";

const User = ({ match }) => {
  const store = useStore();
  const reduxUserDetail = store.getState();
  //console.log("Finally -user from redux store:", reduxUserDetail.userDetail.state);
  const usersData = reduxUserDetail.userDetail.state;
  const user = usersData.find((user) => user.id.toString() === match.params.id);
  const userDetails: any=user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];
  console.log("Clickable Row user details:", userDetails);
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test);
  dispatch(TestAction());
  console.log("Test Redux from User:", test);
  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {userDetails.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;
