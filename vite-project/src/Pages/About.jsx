import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

const About = () => {
  // ✅ Correct usage of useContext
  const { name } = useContext(UserContext) || {};

  return (
    <div>
      <h1>About Page</h1>
      <h1>Hi! {name || 'Guest'}</h1>

      <Link to='/State'>useState Example</Link><br />
      <Link to='/Form'>Controlled Form</Link><br />
      <Link to='/Effect'>useEffect</Link><br />
      <Link to='/Post'>usePost</Link><br />
      <Link to='/Reducer'>useReducer</Link>
    </div>
  );
};

export default About;
