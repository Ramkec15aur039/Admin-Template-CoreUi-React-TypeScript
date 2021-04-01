import { putDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const updateUserData = (params, id) => {
  return putDataApi(URL_CONSTANTS.users, params, id);
};
