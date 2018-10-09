import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/75"
  };

  render() {
    return (
      <div>
        <img className="m-2" src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">+</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
