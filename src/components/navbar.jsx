import React, { Component } from "react";

// Stateless Functional Component - define a function that returns a react element
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Number of items in your cart:
        <span className="badge badge-pill badge-secondary m-1">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Number of items in your cart:
//           <span className="badge badge-pill badge-secondary m-1">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
