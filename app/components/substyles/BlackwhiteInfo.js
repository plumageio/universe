import React from 'react';
import bwinfo from '../../assets/images/svg-titles/black-white-info.svg';

class BlackWhiteInfo extends React.Component {
  render() {
    const defaultStyle = 'blackwhite-info info ';
    const hiddenStyle = 'fadin-out';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img src={bwinfo} alt="Black and White tattoo" />
      </div>
    );
  }
}

export default BlackWhiteInfo;
