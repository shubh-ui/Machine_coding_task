import { useEffect, useState } from "react";

const DEFAULT_RETRIES = 3;
const DEFAULT_CACHE_DURATION = 5 * 60 * 1000;
const cache = {};


export const useFetchWithCache = (url, options = {}, hookOptions = {}) => {

    const {
        retries = DEFAULT_RETRIES,
        cacheDuration = DEFAULT_CACHE_DURATION,
        enabled = true
    } = hookOptions;

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    })


    const fetchData = async (url, currentRetries, options) => {
        const cacheKey = url;

        if (cacheKey in cache) {
            const { data, timeStamp } = cache[cacheKey];
            if (Date.now() - timeStamp < cacheDuration) {
                setState({ data, loading: false, error: null });
                return
            }
        }

        setState(preState => ({ ...preState, loading: false, error: null }));

        for (let attempts = 0; attempts < currentRetries; attempts++) {
            const controller = new AbortController();
            const signal = controller.signal;
            console.log({attempts})

            try {
                const resp = await fetch(url, {
                    ...options,
                    signal
                })


                const newData = await resp.json();

                cache[cacheKey] = {
                    data: newData,
                    timeStamp: Date.now()
                }

                setState({ data: newData, loading: false, error: null });
                return;

            } catch (error) {
                if(attempts < currentRetries) {
                    console.log("inside error")
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                } else {
                    setState(preState => ({...preState, loading: false, error: null}))
                    return;
                }
            }
        }
    }



    useEffect(() => {
        if (!enabled) {
            setState((preState) => ({ ...preState, loading: false }));
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;

        const fetchOptionsWithSiganl = {
            ...options,
            signal
        }

        fetchData(url, retries, fetchOptionsWithSiganl)



    }, [])

    return state;

}



