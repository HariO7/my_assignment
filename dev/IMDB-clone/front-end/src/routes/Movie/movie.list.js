import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Movie = props =>(
  <tr>
    <td>{props.Movie.Name}</td>
    <td>{props.Movie.Plot}</td>
    <td>{props.Movie.Poster}</td>
    <td>{props.Movie.Release}</td>
    <td>
      <Link to={"/edit/"+props.Movie._id}>edit</Link> | <button onClick={()=> {props.deleteMovie(props.Movie._id)}}>delete</button> 
    </td>
  </tr>
)


export default class MovieLists extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = { Movie: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/Movie/")
      .then(res => {
        this.setState({
          Movies: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteMovie(id) {
    axios
      .delete("http://localhost:3001/Movie/" + id)
      .then((res) => {console.log(res.data)});

    this.setState({
      Movies: this.state.Movies.filter(el => el._id !== id),
    });
  }

  MovieList() {
    return this.state.Movie.map(currentMovie => {
      return <Movie Movie={currentMovie} deleteMovie={this.deleteMovie} key={currentMovie._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Movie</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Plot</th>
              <th>Poster</th>
              <th>Release</th>
            </tr>
          </thead>
          <tbody>{this.MovieList()}</tbody>
        </table>
      </div>
    );
  }
}
