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
        this.getTodos();
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        fetch('/api/todo')
            .then(response => response.json())
            .then(response => this.setState({todos: response.data}))
            .catch(err => console.log(err));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    deleteTodo = (e) => {
        e.preventDefault();
        let todoId = e.target.dataset.id;
        fetch(`/api/delete?id=${todoId}`)
            .then(this.getTodos)
            .catch(err => console.log(err))

    };

    handleStatusTodo = (e) => {
        e.preventDefault();
        let todoId = e.target.dataset.id;
        fetch(`/api/changeStatus?id=${todoId}`)
            .then(this.getTodos)
            .catch(err => console.log(err))
    };

    render() {

        const {todos, todo, isLoading } = this.state;

        if (isLoading) {
            return <div className="">Todos are loading...</div>;
        }

        return (
            <ul>
                {todos.map(todo => {
                    let isChecked = true;
                    if (todo.done !== 1) {
                        isChecked = false
                    }
                    else {
                        isChecked = true;
                    }
                        return <div key={todo.id} className="">
                            <div className="card my-card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        Title: {todo.title}
                                    </p>
                                    <a onClick={this.deleteTodo} className="card-header-icon"
                                       aria-label="more options" data-id={todo.id}>delete</a>
                                    <a className="card-header-icon" aria-label="more options">
                                        <label htmlFor={`toggle-more-${todo.id}`}>More</label>
                                    </a>
                                    <a className="card-header-icon">
                                        <input type="checkbox" defaultChecked={isChecked} data-id={todo.id}
                                               onClick={this.handleStatusTodo}/>
                                    </a>
                                </header>
                                <input type="checkbox" className="todo--more--checkbox" id={`toggle-more-${todo.id}`}/>
                                <div className="todo--more">
                                    <div className="card-content">
                                        <div className="content">
                                            Description: {todo.description} <br/>
                                            Due date: <time dateTime="">{todo.dueDate}</time>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        {/*<a href="#" className="card-footer-item">Save</a>*/}
                                        {/*<a href="#" className="card-footer-item">Edit</a>*/}
                                    </footer>
                                </div>
                            </div>
                        </div>;
                    }
                )}

            </ul>
        );
    }
}

export default DisplayItems;