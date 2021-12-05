import './App.css';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Select page to test functionality AbortController.</h2>
      <h3>Page one is a standard component. Page two uses a custom hook.</h3>

      <p><Link to="/page-one">page 1</Link></p>
      <p><Link to="/page-two">page 2</Link></p>
    </div>
  );
}

export default App;
