import React from 'react';
import Navbar from './Navbar';
import PlaceList from './PlaceList';
import { connect } from 'react-redux';
import { fetchPlaces } from '../Action/places';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlaces());
  }
  render() {
    const { mylist, myfav, isFav } = this.props.States;
    console.log(mylist, myfav, isFav);
    const currentTab = isFav ? myfav : mylist;
    return (
      <div className="App">
        <Navbar />
        <div className="tabContainer">
          <div className="tab active-tabs">State-List</div>
          <div className="tab">Favourites-List</div>
        </div>
        <div className="list">
          <div className="state-card">
            {currentTab.map((place) => (
              <PlaceList />
            ))}
          </div>
        </div>
        {currentTab.length === 0 ? (
          <div className="no-places">No Places Added to the tab</div>
        ) : null}
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
