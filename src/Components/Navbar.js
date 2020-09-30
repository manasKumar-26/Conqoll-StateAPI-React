import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddSearchResults from './AddSearchResults';
import { searchedStates } from '../Action/places';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      catagory: 'City',
      search: false,
    };
  }
  selectSearchCriteria = (e, catagory) => {
    e.preventDefault();
    console.log(catagory);
    this.setState({
      catagory,
      search: false,
      searchedPlaces: [],
    });
  };
  handleContent = (e) => {
    this.setState({
      content: e.target.value,
      search: false,
    });
  };
  handleSearch = (e) => {
    e.preventDefault();
    const { content, catagory } = this.state;
    if (content === '') {
      return;
    }
    this.findPlaces(content, catagory);
  };
  findPlaces(content, catagory) {
    const { places } = this.props.States;
    const searched = places.filter((place) => {
      return place[catagory].toUpperCase() === content.toUpperCase();
    });
    this.props.dispatch(searchedStates(searched));
    this.setState({
      search: true,
    });
  }
  render() {
    const { catagory, content, search } = this.state;
    const { searchedPlaces } = this.props.Search;
    return (
      <div className="navbar navbar-dark bg-dark">
        <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Search Places .."
            value={content}
            onChange={this.handleContent}
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            {catagory}
          </button>
          <div className="dropdown-menu">
            {catagory !== 'City' && (
              <div>
                <p
                  className="dropdown-item"
                  onClick={(e) => this.selectSearchCriteria(e, 'City')}
                >
                  City
                </p>
                <hr />
              </div>
            )}
            {catagory !== 'State' && (
              <div>
                <p
                  className="dropdown-item"
                  onClick={(e) => this.selectSearchCriteria(e, 'State')}
                >
                  State
                </p>
                <hr />
              </div>
            )}

            {catagory !== 'District' && (
              <div>
                <p
                  className="dropdown-item"
                  onClick={(e) => this.selectSearchCriteria(e, 'District')}
                >
                  District
                </p>
              </div>
            )}
          </div>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </form>
        {search && (
          <div>
            {searchedPlaces.length === 0 ? (
              <div className="search-container-not-found">No PlacesFound</div>
            ) : (
              <div className="search-container">
                {searchedPlaces.map((place) => (
                  <AddSearchResults place={place} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    States: state.States,
    Search: state.Search,
  };
}
export default connect(mapStateToProps)(Navbar);
