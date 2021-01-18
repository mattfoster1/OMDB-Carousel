import { Component } from 'react';

class Arrow  extends Component {
  render() {
    const { className, onClick } = this.props;

    return (
        <div
          className={className}
          onClick={onClick}
        />
    );
  }
}

export { Arrow }