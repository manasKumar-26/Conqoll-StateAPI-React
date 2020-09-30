import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlaceToList } from '../Action/places';
class AddSearchResults extends Component {
  handleAddToList = async () => {
    const { place } = this.props;
    this.props.dispatch(addPlaceToList(place));
  };
  checkList = (place) => {
    const { mylist } = this.props.States;
    let check = mylist.some((list) => {
      return (
        list.City === place.City &&
        list.District === place.District &&
        list.State === place.State
      );
    });
    return check;
  };
  render() {
    const { place } = this.props;
    const AlreadyInMyLIst = this.checkList(place);
    return (
      <div className="flex-r">
        <div className="flex-c">
          <p className="lead">City :{place.City}</p>
          <p className="lead">Dist :{place.District}</p>
          <p className="lead">State :{place.State}</p>
        </div>
        <div className="flex-c">
          {AlreadyInMyLIst ? (
            <button className="btn btn-secondary" disabled>
              Added
            </button>
          ) : (
            <button
              className="btn btn-secondary"
              onClick={this.handleAddToList}
            >
              Add
            </button>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    States: state.States,
  };
}
export default connect(mapStateToProps)(AddSearchResults);
