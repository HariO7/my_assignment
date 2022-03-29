import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Producer = props =>(
  <tr>
    <td>{props.Producer.Name}</td>
    <td>{props.Producer.Bio}</td>
    <td>{props.Producer.Gender}</td>
    <td>{props.Producer.date}</td>
    <td>
      <Link to={"/edit/"+props.Producer._id}>edit</Link> | <button onClick={()=> {props.deleteProducer(props.Producer._id)}}>delete</button> 
    </td>
  </tr>
)


export default class ProducerLists extends Component {
  constructor(props) {
    super(props);

    this.deleteProducer = this.deleteProducer.bind(this);

    this.state = { Producer: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/Producer/")
      .then(res => {
        this.setState({
          Producers: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteProducer(id) {
    axios
      .delete("http://localhost:3001/Producer/" + id)
      .then((res) => {console.log(res.data)});

    this.setState({
      Producers: this.state.Producers.filter(el => el._id !== id),
    });
  }

  ProducerList() {
    return this.state.Producer.map(currentProducer => {
      return <Producer Producer={currentProducer} deleteProducer={this.deleteProducer} key={currentProducer._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Producer</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Bio</th>
              <th>Gender</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.ProducerList()}</tbody>
        </table>
      </div>
    );
  }
}
