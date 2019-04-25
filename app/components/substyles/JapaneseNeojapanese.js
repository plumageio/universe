import React from 'react';
import neojapanese from '../../assets/images/japanese/neo-japanese.svg';

class JapaneseNeojapanese extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'neo-japanese',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style neo-japanese ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={neojapanese} alt="neo japanese tattoo style" />
      </div>
    );
  }
}

export default JapaneseNeojapanese;
