import React from 'react';
import minimal from '../../assets/images/modern/minimal.svg';

class ModernMinimal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'minimal',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style minimal ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={minimal} alt="minimal tattoo style" />
      </div>
    );
  }
}

export default ModernMinimal;
