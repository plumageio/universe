import React from 'react';
import trash from '../../assets/images/modern/trash-polka.svg';

class ModernTrashpolka extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: 'trash-polka',
    };
  }

  sendSubStyle() {
    const substyle = this.state.styleName;
    this.props.getChosenStyle(substyle);
  }

  render() {
    const defaultStyle = 'sub-style trash-polka ';
    const hiddenStyle = 'invisible';
    const visibleStyle = 'visible';

    return (
      <div className={defaultStyle + (this.props.isVisible ? visibleStyle : hiddenStyle)}>
        <img onClick={() => this.props.onSelect(this.state.styleName)} onKeyDown={() => this.props.onSelect(this.state.styleName)} src={trash} alt="trash polka tattoo style" />
      </div>
    );
  }
}

export default ModernTrashpolka;
