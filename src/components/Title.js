import React from 'react';
import style from './Title.css'

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <h3>Number of task: {this.props.data.length}</h3>
      </div>
    )
  }
}

export default Title;
