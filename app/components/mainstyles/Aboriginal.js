import React from 'react';
import main5 from '../../assets/images/aboriginal/aboriginal.svg';

class Aboriginal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'Aboriginal',
    };
  }

  sendActiveStyle() {
    const mainstyle = this.state.styleName;
    this.props.getActiveStyle(mainstyle);
  }

  render() {
    return (
      <div onClick={this.props.isClicked} onKeyDown={this.props.isClicked} className="main-style aboriginal">
        <img onClick={() => this.props.onActivate(this.state.styleName)} onKeyDown={() => this.props.onActivate(this.state.styleName)} className="aboriginal-icon" src={main5} alt="aboriginal tattoo style" />
      </div>
    );
  }
}

export default Aboriginal;
