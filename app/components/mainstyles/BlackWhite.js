import React from 'react';
import main3 from '../../assets/images/black-white/black-white.svg';

class BlackWhite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'Black and White',
    };
  }

  sendActiveStyle() {
    const mainstyle = this.state.styleName;
    this.props.getActiveStyle(mainstyle);
  }

  render() {
    return (
      <div onClick={this.props.isClicked} onKeyDown={this.props.isClicked} className="main-style black-white" tabIndex="0" role="button">
        <img onClick={() => this.props.onActivate(this.state.styleName)} onKeyDown={() => this.props.onActivate(this.state.styleName)} className="black-white-icon" src={main3} alt="black and white tattoo style" />
      </div>
    );
  }
}

export default BlackWhite;
