import React from 'react';
import Navbar from './Navbar';
import PlaceList from './PlaceList';
import { connect } from 'react-redux';
import { fetchPlaces, ShowTab } from '../Action/places';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlaces());
  }
  ChangeTabs = (value) => {
    this.props.dispatch(ShowTab(value));
  };
  favPlace = (place) => {
    const { myfav } = this.props.States;
    let index = myfav.indexOf(place);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  render() {
    const { mylist, myfav, isFav } = this.props.States;
    const currentTab = isFav ? myfav : mylist;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tabs">
              <div
                className={`tab ${isFav ? '' : 'active-tabs'}`}
                onClick={() => this.ChangeTabs(false)}
              >
                Places
              </div>
              <div
                className={`tab ${isFav ? 'active-tabs' : ''}`}
                onClick={() => this.ChangeTabs(true)}
              >
                Favourites
              </div>
            </div>
          </div>
          <div className="list">
            {currentTab.map((place) => (
              <PlaceList
                place={place}
                fav={this.favPlace(place)}
                isFav={isFav}
              />
            ))}
          </div>
          {currentTab.length === 0 ? (
            <div className="no-places">No Places Added to the tab</div>
          ) : null}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ States }) {
  return {
    States,
  };
}
export default connect(mapStateToProps)(App);
