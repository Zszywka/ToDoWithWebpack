import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <h1>{props.title}</h1>
      // <h3>Number of task: {props.number}</h3>  ??kiedy props a kiedy this.props
      <div>
        <h1>ToDo</h1>
        <h3>Number of task: {this.props.data.length}</h3>
      </div>
    )
  }
}

export default Title;
