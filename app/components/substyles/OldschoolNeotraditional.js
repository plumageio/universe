import React from 'react';
import neotraditional from '../../assets/images/oldschool/neo-traditional.svg';

class OldschoolNeotraditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'neo-traditional',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style neo-traditional ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={neotraditional} alt="" />
      </div>
    );
  }
}

export default OldschoolNeotraditional;
