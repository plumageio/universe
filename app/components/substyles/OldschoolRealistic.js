import React from 'react';
import realistic from '../../assets/images/oldschool/realistic.svg';

class OldschoolRealistic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'realistic',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style realistic ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={realistic} alt="" />
      </div>
    );
  }
}

export default OldschoolRealistic;
