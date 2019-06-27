import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchPeopleAction } from "../actions";
import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchPeopleAction();
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.fetching && (
            <Loader type="Circles" color="dodgerblue" height={80} width={80}/>
          )
        }
        {
          this.props.characters && (
            <div className="CharactersList_wrapper">
              <CharacterList characters={this.props.characters} />
            </div>
          )
        }
        {
          this.props.error && <p className="error"> { 
            this.props.error
          } </p> 
        }
      </React.Fragment>
    );
    }
  }

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchPeopleAction }
)(CharacterListView);
