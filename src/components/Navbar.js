import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  /* const Navbar =()=>{}    and remove render() // this is used for function based components*/
  render() {

    const ulstyle={
      listStyle: "none",
      margin : "0",
      padding: "0",
      overflow: "hidden",
      backgroundColor: "#333",
      
      
    };

    const listyle={
      float: "left"

    }
    const astyle={
      display: "block",
      color: "white",
      textAlign: "center",
      padding: "1vh 3Svw",
      textDecoration: "none"
      
    }
    return (


     <>

<ul style={ulstyle}>
  <li style={listyle}>
  <Link style={astyle}  to="/">Home</Link>
    </li>
  <li style={listyle}>
  <Link style={astyle} to="/sports">Sports</Link>
    </li>
  <li style={listyle}>
  <Link style={astyle}  to="/business">Business</Link>
  </li>
  <li style={listyle}>
  <Link style={astyle}  to="/technology">Technology</Link>
    </li>
</ul>
</>
    )
  }
}


