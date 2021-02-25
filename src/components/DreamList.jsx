import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Dream = props => (
    <tr>
        <td>{props.dream.username}</td>
        <td>{props.dream.description}</td>
        <td>{props.dream.theme}</td>
        <td>{props.dream.date.subString(0, 10)}</td>
        <td>
            <Link to={"/edit/"+props.dream._id}><FontAwesomeIcon icon="pen-square" size="lg" /></Link>  <a href="#" onClick={() => {props.deleteDream(props.dream._id)}}><FontAwesomeIcon icon="trash-alt" size="lg" /></a>
        </td>
    </tr>
)

export class DreamList extends Component {
    constructor(props) {
        super(props);

        this.deleteDream = this.deleteDream.bind(this);

        this.state = { dreams: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/dreams/").then(response => {
            this.setState({ dreams: response.data })
        })

            .catch((error) => {
            console.log(error)
        })
    }

    deleteDream(id) {
        axios.delete("https://localhost:5000/dreams/" + id).then(res => console.log(res.data));

        this.setState({
            dreams: this.state.dreams.filter(el => dreamList => dreamList._id !== id)
        })
    }

    dreamList() {
        return this.state.dreams.map(currentDream => {
            return <Dream dream={currentDream} deleteDream={this.deleteDream} key={currentDream._id} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Recorded Dreams</h3>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Theme</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dreamList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DreamList
