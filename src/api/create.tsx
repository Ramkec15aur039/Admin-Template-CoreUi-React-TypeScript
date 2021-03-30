/******************************** Import libs ************************************/
import { postDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";


export const postUserData = (params) => {
  return postDataApi(URL_CONSTANTS.users, params);
};
