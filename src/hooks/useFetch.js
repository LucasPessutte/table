import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try{
                const res = await fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json'}
                });

                const json = await res.json();

                setData(json);

                setError(false);

            }catch(error){
                setError("Houve um erro ao carregar os dados!");
            }

            setLoading(false);
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
}
