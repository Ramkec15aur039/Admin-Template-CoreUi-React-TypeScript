    
  const storeUserDataReducer = (state = [], action) => {
    console.log("From reducer:",action.value)
    switch (action.type) {
      case "STORE_USER_DATA":
        return { 
          state:action.value
        };
      default:
        return state;
    }
  };
  
  export default storeUserDataReducer;