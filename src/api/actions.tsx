import React from "react";
import { hostConfig, env } from "../config"; //env

/******************************** Response Handler ************************************/
const responseStatusHandler = (response) => {
  switch (response.status) {
    case 400:
      return response;
    case 401:
      return { error: "Unauthorized" };
      break;
    case 402:
      return { error: "Payment Required" };
    case 403:
      return { error: "Forbidden" };
    case 404:
      return { error: "Not Found" };
    case 405:
      return { error: "Method Not Allowed" };
    case 406:
      return { error: "Not Acceptable" };
    case 408:
      return { error: "Request Timeout" };
    case 409:
      return { error: "Request Already Exist" }; // Conflict
    case 410:
      return { error: "permanently deleted from server" };
    case 500:
      return { error: "Internal Server Error" };
    case 501:
      return { error: "Not Implemented" };
    case 502:
      return { error: "Bad Gateway" };
    case 503:
      return { error: "Service Unavailable" };
    case 504:
      return { error: " Gateway Timeout" };
    case 511:
      return { error: " Network Authentication Required" };
    case 200:
    case 201:
      return response;
    default:
      return false;
  }
};

/******************************** Error Handler ************************************/
const errorHandler = (error) => {
  return false;
};

/******************************** Create Api ************************************/
export const postDataApi = (requestUrl, params) => {
    return fetch(`${hostConfig.API_URL}${requestUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: "Bearer " + token,
      },
      body: JSON.stringify(params),
    })
      .then((response) => {
        return responseStatusHandler(response);
      })
      .then((result) => {
        return result.status === 200 || result.status === 201 || result.status === 400 ?
          result.json()
          : result
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  /******************************** View with query Api ************************************/
export const getListByApi = (requestUrl, params) => {

  let getParams = "?";
  if (params && params.rowsPerPage && params.rowsPerPage !== null && params.rowsPerPage !== undefined) { getParams += `limit=${params.rowsPerPage}`; }

  if (params && params.currentPage && params.currentPage !== null && params.currentPage !== undefined) { getParams += `&page=${params.currentPage}`; }

  if (params && params.corematicaName !== null && params.corematicaName !== undefined) { getParams += `&corematicaName=${params.corematicaName}`; }

  if (params && params.requestorEmail !== null && params.requestorEmail !== undefined) { getParams += `&requestorEmail=${params.requestorEmail}`; }

  if (params && params.sortBy && params.sortBy !== null && params.sortBy !== undefined) { getParams += `&sortBy=${params.sortBy}`; }

  if (params && params.userId && params.userId !== null && params.userId !== undefined) { getParams += `&userId=${params.userId}`; }

  if (params && params.favouriteId && params.favouriteId !== null && params.favouriteId !== undefined) { getParams += `&favouriteId=${params.favouriteId}`; }

  if (params && params.isActive !== null && params.isActive !== "" && params.isActive !== undefined) { getParams += `&isActive=${params.isActive}`; }

  if (params && params.role !== null && params.role !== undefined) { getParams += `&role=${params.role}`; }

  if (params && params.search && params.search !== null && params.search !== undefined) { getParams += `&search=${params.search}`; }

  if (params && params.pcp !== null && params.pcp !== "" && params.pcp !== undefined) { getParams += `&pcp=${params.pcp}`; }

  if (params && params.action !== null && params.action !== "" && params.action !== undefined) { getParams += `&action=${params.action}`; }

  return fetch(`${hostConfig.API_URL}${requestUrl}${getParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.status === 200 || result.status === 201 || result.status === 400 ?
        result.json() : result
    })
    .catch((error) => {
      errorHandler(error);
    });
};

/******************************** View Api ************************************/
export const viewDataByApi = (requestUrl, dataId) => {
  console.log("Id from View API :) action:",dataId);
  return fetch(`${hostConfig.API_URL}${requestUrl}/${dataId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      console.log("From Get users by ID",response)
      return responseStatusHandler(response);
    })
    .then((result) => {
      console.log("From Get users by ID",result)
      return result.status === 200 || result.status === 201 || result.status === 400 ?
        result.json()
        : result
    })
    .catch((error) => {
      errorHandler(error);
    });
};

/******************************** Delete Api ************************************/
export const deleteDataApi = (requestUrl, id) => {
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.status === 200 || result.status === 201 || result.status === 400 ?
        result.json()
        : result
    })
    .catch((error) => {
      errorHandler(error);
    });
};

/******************************** Update Api ************************************/
export const putDataApi = (requestUrl, params, id) => {
  console.log("From Update API:", params);
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //Authorization: "Bearer " + token,
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.status === 200 || result.status === 201 || result.status === 400 ?
        result.json()
        : result
    })
    .catch((error) => {
      errorHandler(error);
    });
};
