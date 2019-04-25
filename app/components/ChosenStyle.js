import React from 'react';
import { Link } from 'react-router-dom';

class ChosenStyle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chosen-style">
        <div>
<h1>Tattoo Style</h1>
        <h1>#{this.props.title}</h1></div>
          <div>
            <Link to="/">
              <h2 className="nav"> Back to all styles </h2>
            </Link>
          </div>
      </div>
    );
  }
}

export default ChosenStyle;
