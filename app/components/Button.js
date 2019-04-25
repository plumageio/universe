import React from 'react';

export default class Button extends React.Component {
  render() {
    const { isLoading } = this.props;
    return (
      <button
        className={`button primary ${isLoading ? "is-loading" : ""}`}
        onClick={() => this.props.onClick()}
      >
        {isLoading ? "loading" : "click me"}
      </button>
    );
  }
}
