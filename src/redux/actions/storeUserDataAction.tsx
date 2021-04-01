import React from "react";

export const storeUserDataAction = (val) => {

  return {
    type: "STORE_USER_DATA",
    value:{...val}
  };
};