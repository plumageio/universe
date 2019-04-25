import React from 'react';
// import { Link } from 'react-router-dom';
import watercolor from '../../assets/images/modern/watercolor.png';

class ModernWatercolor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'watercolor',
    };
  }

  sendSubStyle() {
    var substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style watercolor ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div onClick={this.handleSelect} onKeyPress={this.handleSelect} tabIndex="-5" role="button" className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={watercolor} alt="watercolor tattoo style" />
      </div>
    );
  }
}

export default ModernWatercolor;
