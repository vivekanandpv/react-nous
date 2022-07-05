import React, { useReducer } from 'react';
import FormInput from './FormInput';

const Sample = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeFirstName': {
        const newState = { ...state };
        newState.firstName = action.payload;
        return newState;
      }
      case 'changeLastName': {
        const newState = { ...state };
        newState.lastName = action.payload;
        return newState;
      }
      case 'changeEmail': {
        const newState = { ...state };
        newState.email = action.payload;
        return newState;
      }
      case 'changeMobileNumber': {
        const newState = { ...state };
        newState.mobileNumber = action.payload;
        return newState;
      }
    }
  };

  const initialState = {
    firstName: 'Vijay',
    lastName: 'K',
    email: 'vijay@gmail.com',
    mobileNumber: 9988776655,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const changeValue = (value, marker) => {
    switch (marker) {
      case 'firstName': {
        dispatch({
          type: 'changeFirstName',
          payload: value,
        });
        break;
      }
      case 'lastName': {
        dispatch({
          type: 'changeLastName',
          payload: value,
        });
        break;
      }
      case 'email': {
        dispatch({
          type: 'changeEmail',
          payload: value,
        });
        break;
      }
      case 'mobileNumber': {
        dispatch({
          type: 'changeMobileNumber',
          payload: value,
        });
        break;
      }
      default:
        break;
    }
  };

  const submitHandler = () => {
    if (validateForm()) {
      console.log('Form Data', state);
    } else {
      alert('Invalid form, cannot submit');
    }
  };

  const validateForm = () => {
    return (
      state.firstName && state.lastName && state.email && state.mobileNumber
    );
  };

  return (
    <>
      <h3>Customer Registration Form</h3>
      <hr />
      <form onSubmit={submitHandler}>
        <FormInput
          marker='firstName'
          changeHandler={changeValue}
          validation={/^[A-Za-z ]{5,50}$/}
          errorMessage='Name should be [5-50] characters'
          value={state.firstName}
        />

        <FormInput
          marker='lastName'
          changeHandler={changeValue}
          validation={/^[A-Za-z ]{5,50}$/}
          errorMessage='Name should be [5-50] characters'
          value={state.lastName}
        />

        <FormInput
          marker='email'
          changeHandler={changeValue}
          validation={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
          errorMessage='Should be a proper email'
          value={state.email}
        />

        <FormInput
          marker='mobileNumber'
          changeHandler={changeValue}
          validation={/^[6-9][0-9]{9}$/}
          errorMessage='Should be a proper mobile number'
          value={state.mobileNumber}
        />

        <button className='btn btn-primary mt-3'>Submit</button>
      </form>
    </>
  );
};

export default Sample;
