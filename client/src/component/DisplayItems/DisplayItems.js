import React, {Component} from 'react';

class DisplayItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: false,
        };
    }

    componentWillReceiveProps(nextProps){
        // let oldState = this.state.todos;
        //
        // let newState = Object.assign({nextProps}, oldState);
        // this.setState({todos: newState});
        this.getTodos();

    }

    componentDidMount() {
        console.log('mount');
        this.getTodos();
    }

    getTodos = () => {
        // console.log('fetch');
        fetch('/api/todo')
            .then(response => response.json())
            .then(response => this.setState({todos: response.data}))
            // .then(response => console.log(response.data))
            .catch(err => console.log(err));
        // .then(response => console.log(response.data));
    };

    handleSubmit = (e) => {
        console.log(e);
    };

    deleteTodo = (e) => {
        e.preventDefault();
        console.log(e.target.dataset.id);
    };

    handleStatusTodo = (e) => {

    };

    render() {

        const {todos, todo, isLoading} = this.state;

        if (isLoading) {
            return <div className="">Todos are loading...</div>;
        }

        return (
            <ul>
                {/*{this.props.item}*/}
                {/*<p>{todos.map(todo =>{console.log(todo)})}</p>*/}
                {todos.map(todo =>
                    <div className="">
                        <div className="card my-card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Titel: {todo.title} Description: {todo.description}
                                </p>
                                <a href="/edit" className="card-header-icon" aria-label="more options"
                                   data-id={todo.id}>edit</a>
                                <a href="#" onClick={this.deleteTodo} className="card-header-icon"
                                   aria-label="more options" data-id={todo.id}>delete</a>
                                <a className="card-header-icon" aria-label="more options">
                                    <label htmlFor={`toggle-more-${todo.id}`}>More</label>
                                </a>
                                <a className="card-header-icon" >
                                    <input type="checkbox" data-id={todo.id} onClick={this.handleStatusTodo}/>
                                </a>
                            </header>
                            <input type="checkbox" className="todo--more--checkbox" id={`toggle-more-${todo.id}`}/>
                            <div className="todo--more">
                                <div className="card-content">
                                    <div className="content">
                                        Description: {todo.description} <br />
                                        Fälligkeit: <time dateTime="">{todo.dueDate}</time>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <a href="#" className="card-footer-item">Save</a>
                                    <a href="#" className="card-footer-item">Edit</a>
                                </footer>
                            </div>
                        </div>
                    </div>
                )}
            </ul>
        );
    }
}

export default DisplayItems;