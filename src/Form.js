import React from "react";
import {Link} from 'react-router-dom';
import './form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName:"",
      classStd:"",
      yop:"",
      marks:""
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleLastNameChange = evt => {
    this.setState({ lastName: evt.target.value });
  };

  handleClassStdChange = evt => {
    this.setState({ classStd: evt.target.value });
  };
  handleYopChange = evt => {
    this.setState({ yop: evt.target.value });
  };
  handleMarksChange = evt => {
    this.setState({ marks: evt.target.value });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { name, lastName } = this.state;
    alert(`Registered with name: ${name} lastname: ${lastName}`);
  };

  canBeSubmitted() {
    const {name, lastName,classStd,yop,marks } = this.state;

    let regStr = /^[a-zA-z]{1,20}$/;
    let regClass = /^[a-zA-Z0-9]{1,3}$/;
    let regYop = /^\d{4}$/;
    let regMarks = /^\d{1,3}$/;
       
        if(regStr.test(name) && regStr.test(lastName)){
           
            if((regClass.test(classStd)) && (regYop.test(yop)) && (yop <= 2017))
            {
                if( (regMarks.test(marks)) && ( (marks<=100) && (marks>0) ) ){
                console.log(marks)
                return true
                }
            }
    }
   
    return false
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    return (
        <div className="all">
        <div><h2>Student Addmission Form</h2></div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={this.state.name}
          onChange={this.handleNameChange}
          className="form-control"
        /><br></br>
         <input
          type="text"
          placeholder="Enter lastname"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
          className="form-control"
        /><br></br>
         <input
          type="text"
          placeholder="Enter class"
          value={this.state.classStd}
          onChange={this.handleClassStdChange}
          className="form-control"
        /><br></br>
         <input
          type="text"
          placeholder="Enter year of passing"
          value={this.state.yop}
          onChange={this.handleYopChange}
          className="form-control"
        /><br></br>
         <input
          type="text"
          placeholder="Enter percentage of marks"
          value={this.state.marks}
          onChange={this.handleMarksChange}
          className="form-control"
        /><br></br>
        <button className="btn btn-primary" disabled={!isEnabled}>Register</button>
      
      </form>
      <br></br>
      <Link to="/"><button className="btn btn-secondary">Home</button></Link>
     
      </div>
    );
    }
}

export default Form;
