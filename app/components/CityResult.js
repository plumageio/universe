import React from 'react';
import ArtistProfile from './ArtistProfile';

class CityResult extends React.Component {
  render() {
    return (
      <div className="city-selection">
        {this.props.artists.map((artist, index, array) => {
          return <ArtistProfile key={index} name={artist.name} studio={artist.studio} instagram={artist.instagram} facebook={artist.facebook} email={artist.email} image1={artist.image1} image2={artist.image2} />})}
      </div>
    );
  }
}

export default CityResult;
