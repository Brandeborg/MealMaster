import React, { Component } from "react";

class FoodCard extends Component {
  render() {
    return (
      <div className="card-header">
        Dinner
        <div className="btn-group dropleft float-right">
          <button
            className="btn btn-info btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Most viewed
            </a>
            <a className="dropdown-item" href="#">
              Rating
            </a>
            <a className="dropdown-item" href="#">
              Calories
            </a>
            <a className="dropdown-item" href="#">
              Price
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodCard;
