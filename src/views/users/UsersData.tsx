
// Initialise array
export let usersData:any = [];

//To store updated values in array
export let usersDataFn = (data) => {
  console.log("Data check in userData:)) from props:", data);
  usersData = data;
};
