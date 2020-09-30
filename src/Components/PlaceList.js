import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToFav, removeFromFav, removeFromList } from '../Action/places';
class PlaceList extends Component {
  Favourite = () => {
    const { place } = this.props;
    this.props.dispatch(addToFav(place));
  };
  Unfavourite = () => {
    const { place } = this.props;
    this.props.dispatch(removeFromFav(place));
  };
  deletePlace = () => {
    const { place } = this.props;
    this.props.dispatch(removeFromList(place));
  };
  render() {
    const { place, fav, isFav } = this.props;
    return (
      <div className="state-card">
        <div className="contents">
          <div>
            <h6>City :</h6>
            <span className="lead">{place.City}</span>
          </div>
          <div>
            <h6>District :</h6>
            <span className="lead">{place.District}</span>
          </div>
          <div>
            <h6>State :</h6>
            <span className="lead">{place.State}</span>
          </div>
          <div className="footer">
            {fav ? (
              <button className="unfavourite-btn" onClick={this.Unfavourite}>
                Unfavourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={this.Favourite}>
                Favourite
              </button>
            )}
            {!isFav && (
              <button className="delete-btn" onClick={this.deletePlace}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(PlaceList);
