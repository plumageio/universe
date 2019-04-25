import React from 'react';
import { withRouter } from 'react-router-dom';
import ChosenStyle from './ChosenStyle';
import CityResult from './CityResult';

class ArtistResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    const artists = require('../assets/artistsOctober.json').artists;
    const filteredArtists = artists.filter(a => a.style === this.props.match.params.styleName);
    this.setState({artists: filteredArtists});
  }

  render() {
    return (
      <section className="content artist-result">
        <ChosenStyle title={this.props.match.params.styleName} />
        <div className="artists-selection">
        <div className="city-title"><h1>Artists in Berlin</h1></div>
        <CityResult artists={this.state.artists} />
        </div>
      </section>
    );
  }
}

export default withRouter(ArtistResult);
