const initialState = {
    testValue: "Iam_Test_Value",
  };
  
  const testReducer = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case "set":
        return { ...state, ...rest };
      default:
        return state;
    }
  };
  
  export default testReducer;