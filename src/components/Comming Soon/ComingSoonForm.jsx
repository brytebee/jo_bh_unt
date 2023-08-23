import React from 'react';
import propTypes from 'prop-types';

const ComingSoonForm = ({
  Styles, handleSubmit, value, handleChange,
}) => (
  <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-4">
    <input type="text" id="name" name="name" placeholder="Enter your full name" value={value.name} className={`${Styles.input} block text-2xl w-1/2 py-8 px-2 mx-auto mt-2 rounded-lg border md:py-6`} required onChange={handleChange} />
    <div className={`${Styles.form} relative w-1/2 mx-auto`}>
      <input type="email" name="email" id="search" className={`${Styles.input} block text-2xl w-full py-8 px-2 mt-2 rounded-lg border md:py-6`} value={value.email} placeholder="Enter your email address" required onChange={handleChange} />
      <button type="submit" className={Styles.soonBtn}>Notify Me</button>
    </div>
  </form>
);

export default ComingSoonForm;

ComingSoonForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  value: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
  }).isRequired,
  Styles: propTypes.shape({
    input: propTypes.string.isRequired,
    form: propTypes.string.isRequired,
    soonBtn: propTypes.string.isRequired,
  }).isRequired,
};
