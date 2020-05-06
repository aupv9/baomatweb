
import * as TYPE from '../../types';
import axios from 'axios';

/** */
export const sendCodeToEmail= (email) =>{
    return dispatch =>{
        axios.post(TYPE.URL_LOCAL+`/users-code`,email)
                    .then(
                        (response)=>
                        {
                            dispatch(
                                    {
                                        type:TYPE.SEND_CODE_SUCCESS,
                                        payload:response.data
                                    }
                                );
                        })
                    .catch((error) =>{  
                        dispatch(
                            {
                                type:TYPE.SEND_CODE_FAILED,
                                payload:error
                            }
                        );
                    });
    };
};