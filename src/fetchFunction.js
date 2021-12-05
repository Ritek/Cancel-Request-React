function fetchFunction({signal}) {

    if (signal?.aborted) {
      return Promise.reject(new DOMException("Aborted", "AbortError"));
    }

    return new Promise((resolve, reject) => {
      console.log("Promise Started");
      let timeout;
      const abortHandler = () => {
        clearTimeout(timeout);
        reject(new DOMException("Aborted", "AbortError"));
      }

      // start async operation
      timeout = setTimeout(() => {
        resolve("Promise Resolved");
        signal?.removeEventListener("abort", abortHandler);
      }, 1000);    
      signal?.addEventListener("abort", abortHandler);
    });
    
}

export default FetchFunction