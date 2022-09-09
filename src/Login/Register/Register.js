import React from "react";
import './Register.css';
import logo from '../../images/logos/logo.png'
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Share/Loading/Loading";



const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      


    const navigate = useNavigate();
    const navigateLogin = e =>{
        navigate('/login')
    }

    const handleRegister = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const description= e.target.description.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
          alert('Updated profile');

        // console.log(name, password, email, description);
    }
    if(loading || updating){
        return <Loading></Loading>
    }
    if(user){
        navigate('/home');
      }
      

    return(
        <div className="register" onSubmit={handleRegister}>
            <img className="w-60 mx-auto mt-5" src={logo}></img>
            <form className="mx-auto w-96 mt-5">
                <label className="block ">
                    <input type="text" name="name" required placeholder="Full Name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
                <label className="block ">
                    <input type="email"name="email" required placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
                <label className="block ">
                    <input type="text"name="description" required placeholder="Description" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
                <label className="block">
                    <input type="password" name="password"
                        placeholder="Password"
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
                <button className= "w-52 mx-auto mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    Register
                </button>
            </form>
            <p className="mt-3 ">Registered in Volunteer Network? <span className="text-rose-500 cursor-pointer" onClick={navigateLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;