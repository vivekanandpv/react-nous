import React, { useState } from 'react';

const FormInput = (props) => {
  const [validation, setValidation] = useState(null);
  const changeHandler = (e) => {
    if (!e.target.value?.match(props.validation)) {
      setValidation((v) => props.errorMessage);
      props.changeHandler(e.target.value, props.marker);
    } else {
      setValidation((v) => null);
      props.changeHandler(e.target.value, props.marker);
    }
  };
  return (
    <>
      <div className='form-group'>
        <label>{props.label}</label>
        <input
          type={props.type}
          className='form-control'
          onChange={changeHandler}
          value={props.value}
        />
        {validation ? <p className='text-danger'>{validation}</p> : null}
      </div>
    </>
  );
};

export default FormInput;
