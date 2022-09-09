import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './ServiceDetails.css';

const ServiceDetails = ({ detail }) => {
    const { name, picture, _id } = detail;
    const navigate = useNavigate();
    const navigateTOServiceDetail = id => {
        navigate(`detail/${id}`)
    }
    return (
        <div className="border-2 rounded-lg shadow-lg mt-2 bg-blue-100 w-auto ">
            <div className="container">
                <img src={picture} alt="Avatar" className="image" />
                    <div className="overlay">
                        <span className="text cursor-pointer" onClick={()=>navigateTOServiceDetail(_id)}>Click me</span>
                    </div>
            </div>
            {/* <img className=" border rounded shadow-sm mt-2 mx-2 ml-auto mr-auto block w-96" src={picture}></img> */}
            <h5 className=" font-bold">{name}</h5>
        </div>
    );
};

export default ServiceDetails;
//

//border rounded shadow-sm mt-2 mx-2 ml-auto mr-auto block w-96