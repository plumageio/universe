import React from 'react';
import portrait from '../../assets/images/oldschool/portrait.svg';

class OldschoolPortrait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'portrait',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style portrait ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={portrait} alt="" />
      </div>
    );
  }
}

export default OldschoolPortrait;
