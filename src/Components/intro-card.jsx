import React, { Component } from "react";

class IntroCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="card-header text-white bg-info">
              Discover new recipes!
            </div>
            <div className="card-body">
              <p className="card-text">
                Don't know what to have for dinner? Looking for a light snack?
                Find your craving here!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroCard;
