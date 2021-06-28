
const loggedReducer = (state=false,action)=>{
    switch(action.type){
      case "SIGN_IN":return !state;
      default : return false;
    //   case "DECREMENT":return state-1;
    }
  
  }

  export default loggedReducer;