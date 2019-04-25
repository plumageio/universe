import React from 'react';
import moderninfo from '../../assets/images/svg-titles/modern-info.svg'

class ModernInfo extends React.Component {
  render() {
    const defaultStyle = 'modern-info info ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img src={moderninfo} alt="Modern tattoo" />
      </div>
    );
  }
}
export default ModernInfo;
