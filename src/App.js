import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState("");

  const getUrl = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-app">
      <div className="navbar">
        <ul>
          <li>
            <Link
              onClick={() => {
                getUrl("/home");
              }}
              to="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                getUrl("/ourservices");
              }}
              to="/ourservices"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                getUrl("/contactus");
              }}
              to="/contactus"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>{data.content}</h1>
      </div>
    </div>
  );
}

export default App;
