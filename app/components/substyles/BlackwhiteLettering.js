import React from 'react';
import lettering from '../../assets/images/black-white/lettering.svg';

class BlackwhiteLettering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'lettering',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style lettering ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={lettering} alt="lettering tattoo style" />
      </div>
    );
  }
}

export default BlackwhiteLettering;
