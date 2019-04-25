import React from 'react';
import japaneseinfo from '../../assets/images/svg-titles/japanese-info.svg';

class JapaneseInfo extends React.Component {
  render() {
    const defaultStyle = 'japanese-info info ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img src={japaneseinfo} alt="japanese tattoo" />
      </div>
    );
  }
}

export default JapaneseInfo;
