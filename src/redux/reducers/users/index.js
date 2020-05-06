import * as TYPE from '../../types';

const Initstate = localStorage.getItem("ssUser") ? JSON.parse(localStorage.getItem("ssUser")):{}


const users = (state=Initstate, action) => {
    switch (action.type) {
      case TYPE.SEND_CODE_SUCCESS:
        return {
          ...state,code:action.payload
        }
      default:
        return state;
    }
  }
  
  export default users;