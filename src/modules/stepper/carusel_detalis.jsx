import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';
// import { createMuiTheme } from '@material-ui/core';
// import MaterialTable from '@material-table/core';
import SelectItem from '../selectItem/selectItem';

class CourseDetails extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.addCourse !== nextProps.addCourse || this.props.level !== nextProps.level ) {
      return true;
    } else {
      return false;
    }
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    return (
      <div className='form'>
        <form>

          <Stepper
            steps={[{ label: 'Личная информация' }, { label: 'Поставить диагноз' }, { label: 'Диагностика пациента' }]}
            activeStep={1}
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

          <div className='select'>
            <SelectItem/>
          </div>

          <div className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Назад</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Следующий</button>
          </div>

        </form>
      </div>
    )
  }
}

export default CourseDetails;