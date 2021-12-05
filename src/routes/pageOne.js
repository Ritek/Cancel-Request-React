import { Link } from "react-router-dom";
import { useEffect, useRef} from "react";

export default function PageOne() {
  const ref = useRef(null)

  useEffect(() => {
    console.log("Component page-one created!");
    return () => {
      console.log("Component page-one destroyed")
      if (ref.current != null) ref.current.abort()
    }
  }, [])

  const fetchComments = () => {
    if (ref.current != null) {
      ref.current.abort()
    }
    ref.current = new AbortController()
    const {signal} = ref.current

    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'get',
        signal: signal,
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        console.log('Request completed!')
    }).catch(error => {
        console.log(error);
    })
  }

  return (
    <div>
      <h1>Page One</h1>
      <h3>Check console for changes</h3>

      <button onClick={fetchComments}>Fetch</button>

      <p><Link to="/">home</Link></p>
      <p><Link to="/page-two">page 2</Link></p>
    </div>
  )
}
