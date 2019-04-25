import React from 'react';
import polynesian from '../../assets/images/aboriginal/polynesian.svg';

class AboriginalPolynesian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'polynesian',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style polynesian ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={polynesian} alt="polynesian tattoo style" />
      </div>
    );
  }
}

export default AboriginalPolynesian;
