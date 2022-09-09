import React, { useEffect, useState } from "react";


const useDetails = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    return [details, setDetails]
};

export default useDetails;

//username: volunteerNetwork
//password: bC6IQ3QRt1sOm4Yt