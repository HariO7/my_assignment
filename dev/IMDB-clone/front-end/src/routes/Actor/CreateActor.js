import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'


export default class CreateActor extends Component {

  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.state={
      Name: '',
      Gender: '',
      DOB: new Date(),
      actors: []
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:3001/actor/add')
      .then(res => {
        if(res.data.length > 0){
          this.setState({
            users: res.data.map(user => user.Name),
            Name: res.data[0].Name
          })
        }
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  onChangeName(e){
    this.setState({
      Name: e.target.value
    })
  }

  onChangeGender(e){
    this.setState({
      Gender: e.target.value
    })
  }
  
  onChangeBio(e){
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date){
    this.setState({
      date: date
    })
  }


  onSubmit(e){
    e.preventDefault();
    const Actor = {
      Name: this.state.Name,
      Gender: this.state.Gender,
      Bio: this.state.duration,
      date: this.state.date
    }
    console.log(Actor);

    axios.post('http://localhost:3001/Actor/add',Actor)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
      <h3>Create New Actor </h3>
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
          <label>Gender: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Gender}
              onChange={this.onChangeGender}
              />
        </div>  
        <div className="form-group">
          <label>Bio: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Bio}
              onChange={this.onChangeBio}
              />
        </div>
        <div className='form-control'>
          <label>Date:</label>
          <DatePicker 
          selected={this.state.date}
          onChange={this.onChangeDate} />

        </div>

        <div className="form-group">
          <input type="submit" value="Add Actor" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}

