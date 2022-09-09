import React from "react";
import Detail from "../../Service/Detail/Detail";


const Home = () => {
    return (
        <div className="w-100">
            <h2 className=" font-bold font-Montserrat text-2xl mt-2 animate-bounce" style={{color: 'orange'}}>I GROW BY HELPING PEOPLE IN NEED</h2>
            <div className="mt-2">
                <input type='text' name='search' placeholder='Search a volunteer'
                    style={{border: '1px solid #D6D6D6', borderRadius: '5px'}}

                ></input>
                <button class="bg-blue-500 hover:bg-cyan-500 rounded-sm">
                    Search
                </button>
            </div>
        <Detail></Detail>

        </div>
    );
};

export default Home;




