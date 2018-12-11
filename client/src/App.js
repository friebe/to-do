import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        todos: [],
        isLoading: false,
    };

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () =>  {
        fetch('http://localhost:4000/todos')
            .then(response => response.json())
            .then(response => this.setState({ todos: response.data, isLoading: false }))
            .catch();
        // .then(response => console.log(response.data));
    };

    addTodo = () => {

    };

    render() {
        const { todos, isLoading } = this.state;

        if(isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="App">
                <ul>
                    {todos.map(todo =>
                        <div name={todo.id} key={todo.id}>{todo.title}</div>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
