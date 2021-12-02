import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url, mockData) { // mockData is temp, just for testing
    const [data, setData] = useState([]);
    const [status, setstatus] = useState("LOADING");
    const [error, setError] = useState();

    useEffect(() => {
        // Avoid state updates if useFetch()'s calling component unmounts before state updates
        // (to avoid error: "Can't perform a React state update on an unmounted component.")
        let didComponentUnmount = false;

        const fetchData = async () => {
            try {
                // const response = await axios.get(url);

                if (didComponentUnmount) return;

                if ("response data is not empty") {
                    // TEMP this should be setData(response.data)
                    setData(mockData);
                    setstatus("OK");
                } else {
                    setstatus("EMPTY");
                }
            } catch (err) {
                if (didComponentUnmount) return;

                setError(err);
                setstatus("ERROR");
            }
        };
        fetchData();
            
        // Cleanup function: component unmounted, stop any state update
        return () => didComponentUnmount = true;
        
        // temporary exclusion
        // eslint-disable-next-line 
    }, [url]);

    return { data, status, error }
}