import {useState, useEffect} from 'react';
function useApiCall() {

    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true)
    const getData = async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
        setIsloading(false);
    }
    // useEffect(() => {
    //     getData();
        
    // }, [url, getData]);
    return [data, isLoading, getData];
}
export default useApiCall;