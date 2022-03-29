import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Actor = props =>(
  <tr>
    <td>{props.Actor.Name}</td>
    <td>{props.Actor.Bio}</td>
    <td>{props.Actor.Gender}</td>
    <td>{props.Actor.date}</td>
    <td>
      <Link to={"/edit/"+props.Actor._id}>edit</Link> | <button onClick={()=> {props.deleteActor(props.Actor._id)}}>delete</button> 
    </td>
  </tr>
)


export default class ActorLists extends Component {
  constructor(props) {
    super(props);

    this.deleteActor = this.deleteActor.bind(this);

    this.state = { Actor: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/Actor/")
      .then(res => {
        this.setState({
          Actors: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteActor(id) {
    axios
      .delete("http://localhost:3001/Actor/" + id)
      .then((res) => {console.log(res.data)});

    this.setState({
      Actors: this.state.Actors.filter(el => el._id !== id),
    });
  }

  ActorList() {
    return this.state.Actor.map(currentActor => {
      return <Actor Actor={currentActor} deleteActor={this.deleteActor} key={currentActor._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Actor</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Bio</th>
              <th>Gender</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.ActorList()}</tbody>
        </table>
      </div>
    );
  }
}
