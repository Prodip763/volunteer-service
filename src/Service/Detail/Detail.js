import React from "react";
import useDetails from "../../hooks/useDetails";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Detail = () =>{
    const [details] = useDetails();
    return(
        <div>
            <div className="md:grid grid-cols-3 m-6 gap-2 ">
                {
                    details.map(detail => <ServiceDetails key={detail._id}detail={detail}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Detail;