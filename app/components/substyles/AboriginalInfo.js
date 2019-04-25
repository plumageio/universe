import React from 'react';
import aboriginalinfo from '../../assets/images/svg-titles/aboriginal-info.svg';

class AboriginalInfo extends React.Component {
  render() {
    const defaultStyle = 'aboriginal-info info ';
    const hiddenStyle = 'fadin-out';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img src={aboriginalinfo} alt="Aboriginal tattoo" />
      </div>
    );
  }
}

export default AboriginalInfo;
