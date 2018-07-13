import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList.js';
import { hot } from 'react-hot-loader';
import TodoForm from '../components/TodoForm.js';

class App extends React.Component {
  constructor(props){
      super(props);
      //utrzymuje stan aplikacji
      this.state = {
        data: [
          {id: 1, text: 'clean room'},
          {id: 2, text: 'wash the dishes'},
          {id: 3, text: 'feed my cat'}
        ]
      };
  }
  // dodawanie nowych elementow do kolekcji
  addTodo(val){
      const todo = {
          text: val,
          // bibloteka uuid do tworzenia unikatowtych wartosci
          id: uuid.v4(),
      };
      //ustawienie stanu aplikacji
      //const aby zmienna nie byla nigdy nadpisywana
      //data zwraca(jak push) [tablice elementami kolekcji + na koncu(todo) nowy element kolekcji]
      //i nie zmienia stanu (bo push zmienia stan)
      //dostajemy nowa tablice z zawartoscia starej i nowym elem na koncu
      const data = [...this.state.data, todo];
      //this.setState({data: data}); to samo
      this.setState({data});
  }
  //usuwanie elementow
  removeTodo(id) {
    //dzieki niej tworzyny nowa tablice z odfiltrowanymi pewnymi elementami
    //id - to szukane przez nas, todo.id ->id konkretnego elementu
  const remainder = this.state.data.filter(todo => todo.id !== id);
  this.setState({data: remainder});
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title data={this.state.data}/>
        <TodoList data={this.state.data} remove={ (id) => this.removeTodo(id)}/>
        <TodoForm data={this.state.data} addTodo={ (val) => this.addTodo(val)}/>
      </div>
    );
  }
}

// export default App;
// ma byc odswiezany jesli tylko nastapia zmiany
export default hot(module)(App);
