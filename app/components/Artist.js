/* import React from 'react';

const data = {
  1: 'Yaknel',
  2: 'Florian',
};

class Artist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const artistData = data[id];
    console.log(id, artistData);

    this.setState({
      artist: artistData,
    });
  }

  render() {
    return (
      <h1>{this.state.artist}</h1>;
    );
  }
}

export default Artist;
*/
