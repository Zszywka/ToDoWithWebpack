import React from 'react';
import style from './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className={style.TodoList}>
        {this.props.data.map( (todo) => <li key={todo.id}><a href={'#'} onClick={() => this.props.remove(todo.id)}></a>{todo.text}</li>)}
      </ul>
    )
  }
}

export default TodoList;
