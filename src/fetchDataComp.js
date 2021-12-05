import React from 'react'

function fetchDataComp() {
    const fetchComments = () => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch(urlToFetch, {
            method: 'get',
            signal: signal,
        }).then(result => {
            console.log(result.data);
        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div>
            <h3>Click below button to fetch</h3>
            <p>Check concole for result!</p>
            <button onClick={fetchComments}>Fetch</button>
        </div>
    )
}

export default fetchDataComp
