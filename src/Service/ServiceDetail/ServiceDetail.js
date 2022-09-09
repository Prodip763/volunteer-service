import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = ()=>{
    const {serviceId } = useParams();
    return(
        <div>
            <h1>Welcome to detail:{serviceId}</h1>
            <div>
                <Link to='/checkout'><button className= "w-52 mx-auto mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    Checkout
                </button></Link>
            
            </div>
        </div>
    );
};

export default ServiceDetail;