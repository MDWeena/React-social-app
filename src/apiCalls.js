import axios from "axios";
import toast from "react-hot-toast";

export const loginCall = async (userCredentials, dispatch) => {
    console.log(userCredentials);

    dispatch({ type: "LOGIN_START"})

    try {
        let res = await axios.post('http://localhost:5000/api/v1/auth/login', userCredentials)
        if(res.data.success) toast.success(res.data.msg)
        console.log(res.data);
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data})
    } catch (err) {
        if(!err.response.data.success) return toast.error(err.response.data.msg)
        dispatch({ type: 'LOGIN_FAILURE', payload: err})
    }

}