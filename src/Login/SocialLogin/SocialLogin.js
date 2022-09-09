import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from '../../images/logos/google.png';
import Loading from "../../Share/Loading/Loading";
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
            errorElement = <div>
                <p className="text-rose-500">Error: {error.message}</p>
            </div>
    }
    if (loading) {
        return <Loading></Loading>
      }
    
    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className="flex items-center gap-2 mx-auto justify-center">
                <div style={{ height: '1px' }} className="bg-blue-600 w-52"></div>
                <p>Or</p>
                <div style={{ height: '1px' }} className="bg-blue-600 w-52"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className="w-52 mx-auto mt-2 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center flex gap-2 justify-center">
                    <img style={{ width: '30px' }} src={google}></img>
                    Google Signin
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;