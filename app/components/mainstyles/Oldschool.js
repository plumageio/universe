import React from 'react';
import main4 from '../../assets/images/oldschool/oldschool.svg';

class Oldschool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'Oldschool',
    };
  }

  sendActiveStyle() {
    const mainstyle = this.state.styleName;
    this.props.getActiveStyle(mainstyle);
  }

  render() {
    return (
      <div onClick={this.props.isClicked} onKeyDown={this.props.isClicked} className="main-style oldschool" tabIndex="0" role="button">
        <img onClick={() => this.props.onActivate(this.state.styleName)} onKeyDown={() => this.props.onActivate(this.state.styleName)} className="oldschool-icon" src={main4} alt="oldschool tattoo style" />
      </div>
    );
  }
}

export default Oldschool;
