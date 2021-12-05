import { Link } from "react-router-dom";
import { useEffect } from "react";
import useSafeFetch from "../useSafeFetch";

export default function PageTwo() {
  const data = useSafeFetch({urlFetch: 'https://jsonplaceholder.typicode.com/posts'})

  useEffect(() => {
    console.log("data:", data)
  }, [data]) 

  useEffect(() => {
    console.log("Component page-two created!");
    return () => {
      console.log("Component page-two destroyed!");
    }
  }, [])

  return (
    <div>
      <h1>Page Two</h1>
      <h3>Check console for changes</h3>
      
      <p><Link to="/">home</Link></p>
      <p><Link to="/page-one">page 1</Link></p>
    </div>
  )
}