import React from 'react';

class Results extends React.Component {
  render() {
    return (
      <section>
        <pre data-testid="result">{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
      </section>
    );
  }
}

export default Results;
