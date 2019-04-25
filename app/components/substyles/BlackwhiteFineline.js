import React from 'react';
import fineline from '../../assets/images/black-white/fine-line.svg';

class BlackwhiteFineline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'fine-line',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style fine-line ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={fineline} alt="fine line tattoo style" />
      </div>
    );
  }
}

export default BlackwhiteFineline;
