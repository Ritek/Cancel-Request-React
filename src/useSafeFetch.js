import { useState, useEffect } from "react";

const useSafeFetch = ({urlFetch}) => {
    const [fetchResponse, setFetchResponse] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
  
        fetch(urlFetch, {
            method: 'GET',
            signal: abortController.signal,
        })
        .then(res => res.json())
        .then(res => {
            setFetchResponse(res)
        })
        .catch(err => console.log(err))
  
        return function cancel() {
            abortController.abort()
        }
    }, [urlFetch])

    return fetchResponse
}

export default useSafeFetch
