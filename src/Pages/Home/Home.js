import React from "react";
import Detail from "../../Service/Detail/Detail";


const Home = () => {
    return (
        <div className="w-100">
            <h2 className=" font-bold font-Montserrat text-2xl mt-2 animate-bounce" style={{ color: 'orange' }}>I GROW BY HELPING PEOPLE IN NEED</h2>
            <div className="flex flex-nowrap justify-center  ">
                <div>
                <label className="relative block w-72 ">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />


                </label>
                </div>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Search
                </button>

            </div>
            <Detail></Detail>

        </div>
    );
};

export default Home;




