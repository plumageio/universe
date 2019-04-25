import React from 'react';
import graphic from '../../assets/images/modern/graphic.svg';

class ModernGraphic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'graphic',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style graphic ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={graphic} alt="graphic tattoo style" />
      </div>
    );
  }
}

export default ModernGraphic;
