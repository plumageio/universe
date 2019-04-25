import React from 'react';
import sketch from '../../assets/images/modern/sketch-work.svg';

class ModernSketchwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'sketchwork',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style sketch-work ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={sketch} alt="sketch work tattoo style" />
      </div>
    );
  }
}

export default ModernSketchwork;
