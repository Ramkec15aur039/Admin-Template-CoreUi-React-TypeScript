import { getListByApi, viewDataByApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const getUserList = (params) => {
    return getListByApi(URL_CONSTANTS.users, params);
  };
