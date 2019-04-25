import React from 'react';
import oldschoolinfo from '../../assets/images/svg-titles/oldschool-info.svg'

class OldschoolInfo extends React.Component {
  render () {
    const defaultStyle = 'oldschool-info info ';
    const hiddenStyle = 'fadin-out';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img src={oldschoolinfo} alt="oldschool tattoo" />
      </div>
    );
  }
}

export default OldschoolInfo;
