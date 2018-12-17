import React, {Component} from 'react';
import DisplayItems from "../DisplayItems/DisplayItems";

class InputBox extends Component {

    constructor() {
        super();
        this.state = {
            // value: '',
            // items: []
            title: '',
            description: '',
            dueDate: '',
            isReadyToSubmit: true
        };
    }


    handleChange = (e) => {
        // var text = event.target.value;
        // this.setState({items: text});
        // console.log(text);
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // // var text = this.state.text;
        // // this.setState({text: '', items: text});
        // const form = event.target;
        // const data = new FormData(form);
        //
        // var inputValues= {};
        // for (let name of data.keys()) {
        //     const input = form.elements[name];
        //     inputValues[name] = input.value;
        // }
        //
        // this.setState({ items: inputValues });
        this.setState({isReadyToSubmit: true});
        this.addTodo();
    };

    addTodo = () => {
        const { title, description, dueDate } = this.state;
        fetch(`api/add?title=${title}&description=${description}&dueDate=${dueDate}&done=0`)
        // .then(response => response.json())
            .then(this.getTodos)
            .catch(err => console.log(err))
    };

    render() {
        let { title, description, dueDate, isReadyToSubmit } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="card">
                        <div className="card-content">
                            <div className="field">
                                <label className="label">Titel</label>
                                <div className="control">
                                    <input
                                        name="title"
                                        value={title}
                                        className="input"
                                        type="text"
                                        placeholder="Text input"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </div>
                                <div className="field">
                                    <label className="label">Description</label>
                                    <div className="control">
                                        <input
                                            value={description}
                                            className="input"
                                            name="description"
                                            type="text"
                                            placeholder="Text input"
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Fälligkeitsdatum</label>
                                    <div className="control">
                                        <input
                                            value={dueDate}
                                            className="input"
                                            name="dueDate"
                                            type="date"
                                            placeholder="Text input"
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="button is-primary" type="submit">Absenden</button>
                        </div>
                    </div>
                </form>

                {/*{ this.state.title }*/}
                <DisplayItems flagisUpdate={isReadyToSubmit}/>

            </div>
        );
    }
}

export default InputBox;