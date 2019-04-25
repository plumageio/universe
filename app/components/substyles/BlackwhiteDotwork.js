import React from 'react';
import dotwork from '../../assets/images/black-white/dot-work.svg';

class BlackwhiteDotwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'dotwork',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style dot-work ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={dotwork} alt="dotwork tattoo style" />
      </div>
    );
  }
}

export default BlackwhiteDotwork;
