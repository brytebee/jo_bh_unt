import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = (props) => {
  const { inputFields, handleChange } = props;

  if (!inputFields) {
    return null;
  }
  return (
    <>
      {inputFields.map((input, index) => (
        <div key={Number(index)} className={styles.form_cont}>
          <label htmlFor={index + 1}>{input.label}</label>
          <input
            id={index + 1}
            type={input.type}
            defaultValue={input.value}
            placeholder={input.placeholder}
            onChange={handleChange}
            required={input.required}
          />
        </div>
      ))}
    </>
  );
};

Input.propTypes = {
  inputFields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      placeholder: PropTypes.string.isRequired,
      required: PropTypes.bool,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
