import React, {useEffect} from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { usersData } from "./UsersData";
import { TestAction } from "../../redux/actions/testAction";
import { useSelector, useDispatch } from "react-redux";


const User = ({ match }) => {
  console.table(match);
  console.log("User data from user:->>>>>", usersData);
  const user = usersData.find((user) => user.id.toString() === match.params.id);
  let userDetails: any = user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];

  //Sample Redux
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test);
  dispatch(TestAction());

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {userDetails.map(([key,value],index) => {
                 return key!=="id" && key!=="isAdmin" ?                  //Conditional mapping
                     (
                      <tr key={index.toString()}>
                        <td>{`${key}:`}</td>
                        <td>
                          <strong>{value}</strong>
                        </td>
                      </tr>
                    ):null
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
