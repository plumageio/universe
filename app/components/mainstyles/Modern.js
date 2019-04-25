import React from 'react';
import main1 from '../../assets/images/modern/modern.svg';

class Modern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'Modern',
    };
  }

  sendActiveStyle() {
    const mainstyle = this.state.styleName;
    this.props.getActiveStyle(mainstyle);
  }

  render() {
    return (
      <div onClick={this.props.isClicked} onKeyDown={this.props.isClicked} tabIndex="0" role="button" className="main-style modern">
        <div onClick={() => this.props.onActivate(this.state.styleName)} onKeyDown={() => this.props.onActivate(this.state.styleName)} alt="modern tattoo style">
          <img className="modern-icon" src={main1} alt="modern tattoo style" />
        </div>
      </div>
    );
  }
}

export default Modern;
