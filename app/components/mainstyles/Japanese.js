import React from 'react';
import main2 from '../../assets/images/japanese/japanese.svg';

class Japanese extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'Japanese',
    };
  }

  sendActiveStyle() {
    const mainstyle = this.state.styleName;
    this.props.getActiveStyle(mainstyle);
  }

  render() {
    return (
      <div onClick={this.props.isClicked} onKeyDown={this.props.isClicked} className="main-style japanese" tabIndex="0" role="button">
        <img onClick={() => this.props.onActivate(this.state.styleName)} onKeyDown={() => this.props.onActivate(this.state.styleName)} className="japanese-icon" src={main2} alt="japanese tattoo style" />
      </div>
    );
  }
}

export default Japanese;
