import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'


export default class CreateMovie extends Component {

  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePlot = this.onChangePlot.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeRelease = this.onChangeRelease.bind(this)
    this.state={
      Name: '',
      Plot: '',
      Poster: '',
      Release: new Date()

    }
  }

  onChangeName(e){
    this.setState({
      Name: e.target.value
    })
  }

  onChangePlot(e){
    this.setState({
      Plot: e.target.value
    })
  }
  
  onChangePoster(e){
    this.setState({
      duration: e.target.value
    })
  }

  onChangeRelease(date){
    this.setState({
      date: date
    })
  }


  onSubmit(e){
    e.preventDefault();
    const Movie = {
      Name: this.state.Name,
      Plot: this.state.Plot,
      Poster: this.state.Poster,
      Release: this.state.Release
    }
    console.log(Movie);

    axios.post('http://localhost:3001/Movie/add',Movie)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
      <h3>Create New Movie </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
        <label>Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Name}
              onChange={this.onChangeName}
              />

        </div>
        <div className="form-group"> 
          <label>Plot: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Plot}
              onChange={this.onChangePlot}
              />
        </div>  
        <div className="form-group">
          <label>Poster: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Poster}
              onChange={this.onChangePoster}
              />
        </div>
        <div className='form-control'>
          <label>Release:</label>
          <DatePicker 
          selected={this.state.Release}
          onChange={this.onChangeRelease} />

        </div>

        <div className="form-group">
          <input type="submit" value="Add Movie" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}

