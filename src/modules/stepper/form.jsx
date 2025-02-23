import React, { Component } from 'react';

import PersonalDetails from './personal_detalis';
import CourseDetails from './carusel_detalis';
import Summary from './summary';

const levelsData = ['Beginner', 'Intermediate', 'Advanced'];

class Form extends Component {
  state = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    courses: [],
    level: '',
    isErrorFirstName: true,
    isErrorLastName: true,
    errorMessageFirstName: '',
    errorMessageLastName: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })

    if (input === 'firstname') {
      if (this.state.firstname.length >= 1) {
        this.setState({
          isErrorFirstName: false
        })
      }
    }

    else if (input === 'lastname') {
      if (this.state.lastname.length >= 1) {
        this.setState({
          isErrorLastName: false
        })
      }
    }
  }

  addLevel = e => {
    const levelChosen = e.target.value;
    this.setState({
      level: levelChosen
    });
  };

  addCourse = data => {
    const id = data.map(v => v.id);
    this.setState({
      courses: id
    })
  };

  validateFirstName = () => {
    if (this.state.firstname.length < 2) {
      this.setState({
        isErrorFirstName: true,
        errorMessageFirstName: 'Type your first name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }

  validateLastName = () => {
    if (this.state.lastname.length < 2) {
      this.setState({
        isErrorLastName: true,
        errorMessageLastName: 'Type your last name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 

  submitData = e => {
    e.preventDefault();
    alert('Data sent');
  }

  render() {
    const {
      step,
      firstname,
      lastname,
      email,
      phone,
      level,
      isErrorFirstName,
      isErrorLastName,
      errorMessageFirstName,
      errorMessageLastName
    } = this.state;

    // const coursesOptions = coursesData.map(el => ({
    //   course: el.courseName,
    //   id: el.id,
    //   category: el.category
    // }));

    // const coursesChosen = coursesData.filter(el => courses.includes(el.id));
    // const coursesChosenSummary = coursesChosen.map(el => (
    //   <p key={el.id}>
    //     {el.courseName} - {el.category} 
    //   </p>
    // ));

    const chosenLevel = level;
    
    const levelOptions = levelsData.map((el, index) => (
      <option key={index} value={el}>
        {el}
      </option>
    ));
    
    switch(step) {
      case 1: 
        return (
          <PersonalDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
            validateFirstName={this.validateFirstName}
            validateLastName={this.validateLastName}
            isErrorFirstName={isErrorFirstName}
            isErrorLastName={isErrorLastName}
            errorMessageFirstName={errorMessageFirstName}
            errorMessageLastName={errorMessageLastName}
          />
        )
      case 2:
        return (
          <CourseDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addCourse={this.addCourse}
            // coursesOptions={coursesOptions}
            addLevel={this.addLevel}
            levelOptions={levelOptions}
            level={level}
          />
        )
      case 3:
        return (
          <Summary 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
            // coursesChosenSummary={coursesChosenSummary}
            chosenLevel={chosenLevel}
          />
        )
      default: return null
    }
  }
}

export default Form;
