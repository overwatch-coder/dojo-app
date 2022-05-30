/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const FetchAPI = (url) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [allData, setAllData] = useState(null);

     useEffect(()=> {
         fetch(url)
         .then(response => {
             if(!response.ok){
                 throw Error('Sorry, data could not be fetched!');
             }
             return response.json();
         })
         .then(data => {
            setAllData(data);
            setIsLoading(false);
            setError(null);
         })
         .catch(err => {
             setError(err.message);
             setIsLoading(false);
         });
     }, [url, allData])

    return {allData, isLoading, error };
}
 
export default FetchAPI;