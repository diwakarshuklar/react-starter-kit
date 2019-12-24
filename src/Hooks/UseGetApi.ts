import { useState, useEffect }  from 'react';

function UseGetApi(api: Function, initState: any = [], initLoading = true) {
    const [data, setData] = useState(initState);
    const [loading, setLoading] = useState(initLoading);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        try {
            const data: any = await api();
            setData(data);
            setError(null);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    const refetch = () => {
        fetchApiData();
    }

    return {
        data,
        loading,
        error,
        refetch
    }
}

export default UseGetApi;