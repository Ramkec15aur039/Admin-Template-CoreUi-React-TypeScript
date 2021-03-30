import { getListByApi, viewDataByApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const getUserList = (params) => {
  return getListByApi(URL_CONSTANTS.users, params);
};

export const getUserById = (dataId) => {
  console.log("From getUserById fn",dataId);
  return viewDataByApi(URL_CONSTANTS.users, dataId);
};
