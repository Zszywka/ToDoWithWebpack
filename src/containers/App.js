// wszytskie pobrane pakiety tak sie pobiera do tego pliku
import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
  constructor(props){
      super(props);
      //utrzymuje stan aplikacji
      this.state = {
          data: []
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
    //?? skad bierze todo? z powyzszej metody?jak to dokladnie dziala???
    //funkcja bierze cala tablice elementow filtruje(sprawdza czy id aktualnie
    // sprawdzanego elementu(id) jest = id usuwanego elementu(todo.id))
  const remainder = this.state.data.filter(todo => todo.id !== id);
  this.setState({data: remainder});
  }

  render() {
    return (
      <div className={style.TodoApp}>
        // <Title title="ToDo" number={this.state.data.length}></Title>
        <Title data={this.state.data}/>
      </div>
    );
  }
}

export default App;
