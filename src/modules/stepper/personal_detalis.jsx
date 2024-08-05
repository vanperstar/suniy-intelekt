import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';
import GenderFunc from '../patient/gender'

class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault(); 
    const isFirstNameValid = this.props.validateFirstName();
    const isLastNameValid = this.props.validateLastName();
    if (isFirstNameValid && isLastNameValid) {
      this.props.nextStep();
    }
  }

  render() {
    const { 
      firstname, 
      lastname, 
      email, 
      phone, 
      handleChange, 
      validateFirstName,
      validateLastName,
      isErrorFirstName,
      isErrorLastName,
      errorMessageFirstName,
      errorMessageLastName
    } = this.props;

    try {
        localStorage.setItem('first_name', firstname)
        localStorage.setItem('last_name', lastname)
        localStorage.setItem('full_name', email)
        localStorage.setItem('phone', phone)
    } catch (error) {
        console.log(error);
    }

    return (
      <div className='form'>
        <form>

          <Stepper
            steps={[{ label: 'Личная информация' }, { label: 'Поставить диагноз' }, { label: 'Диагностика пациента' }]}
            activeStep={0}
            styleConfig={{
              activeBgColor: '#2b7cff',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#fff',
              completedTextColor: '#2b7cff',
              size: '3em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

          <div className='form-group'>
            <div className='form-group__element'>
              <label htmlFor='first name' className='form-group__label'>
              Имя пациента
              </label>
              <input type='text' value={firstname} name='first name' onChange={handleChange('firstname')} onBlur={validateFirstName} className='form-group__input form-group__input_media'/>
              <p className='error'>{isErrorFirstName && errorMessageFirstName}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='last name' className='form-group__label'>
              Фамилия пациента
              </label>
              <input type='text' value={lastname} name='last name' onChange={handleChange('lastname')} onBlur={validateLastName} className='form-group__input' />
              <p className='error'>{isErrorLastName && errorMessageLastName}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='email' className='form-group__label'>
              Отцовство пациента
              </label>
              <input type='text' value={email} name='email' onChange={handleChange('email')} className='form-group__input' />
            </div>

            <div className='form-group__element'>
              <label htmlFor='phone' className='form-group__label'>
              Телефон пациента
              </label>
              <input placeholder='+998901234567' type='text' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' />
            </div>
          <GenderFunc/>
          </div>

          <saveDocumentToFile/>
            
          <div style={{textAlign: 'center'}}>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Следующий</button>
          </div>


        </form>
      </div>
    )
  }
}

export default PersonalDetails;