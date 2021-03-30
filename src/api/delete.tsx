/******************************** Import libs ************************************/
import { deleteDataApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

export const deleteUser = (id) => {
  return deleteDataApi(URL_CONSTANTS.users, id);
};


