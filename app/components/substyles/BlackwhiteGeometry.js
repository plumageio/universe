import React from 'react';
import geometric from '../../assets/images/black-white/geometric.svg';

class BlackwhiteGeometry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'geometric',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style geometry ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={geometric} alt="geometric tattoo style" />
      </div>
    );
  }
}

export default BlackwhiteGeometry;
