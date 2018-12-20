import React, {Component} from 'react';
import DisplayItems from "../DisplayItems/DisplayItems";
import dateTime from "./dateTime.css";
import Datetime from "react-datetime";
import moment from "moment";

class InputBox extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            description: '',
            dueDate: '',
            isReadyToSubmit: true
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    setAppTime = (e) => {
        let dateTime = new Date(e.toDate());
        dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
        this.setState({ ['dueDate']: dateTime });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isReadyToSubmit: true});
        this.addTodo();
    };

    addTodo = () => {
        const { title, description, dueDate } = this.state;
        fetch(`api/add?title=${title}&description=${description}&dueDate=${dueDate}&done=false`)
            .then(this.getTodos)
            .catch(err => console.log(err))
    };

    render() {
        let { title, description, dueDate, isReadyToSubmit } = this.state;
        let date = new Date();

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="card">
                        <div className="card-content">
                            <div className="field">
                                <label className="label">Title</label>
                                <div className="control">
                                    <input
                                        name="title"
                                        value={title}
                                        className="input"
                                        type="text"
                                        placeholder="Title"
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
                                            placeholder="description"
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Due date</label>
                                    <div className="control">
                                        <Datetime
                                          className="input"
                                          value={date}
                                          name="dueDate"
                                          onChange={this.setAppTime.bind(this)}
                                          dateFormat="YYYY-MM-D"
                                          timeFormat="h:mm:ss"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="button is-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>

                <DisplayItems flagisUpdate={isReadyToSubmit}/>

            </div>
        );
    }
}

export default InputBox;