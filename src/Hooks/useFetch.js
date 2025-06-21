import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {  
                setLoading(true);
                const resp = await fetch(url);
                const data = await resp.json();
                if (data) {
                    setData(data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    return { data, loading, error }
}