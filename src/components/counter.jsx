import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/75"
  };

  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <img className="m-2" src={this.state.imageUrl} alt="" />
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button
          style={{ fontSixe: 30, fontWeight: "bold" }}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
