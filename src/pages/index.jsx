import React from 'react';
import { ComingSoon, MiniNav } from '../components';

const ComingSoonPage = () => {
  const [userInputs, setUserInputs] = React.useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs);

    setUserInputs({
      name: '',
      email: '',
    });
  };
  return (
    <div>
      <MiniNav />
      <ComingSoon
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={userInputs}
      />
    </div>
  );
};

export default ComingSoonPage;
