import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/StateProvider';
import { actionTypes } from '../helpers/Reducers';

const Login = () => {
  //we load faceIO using a useEffect hook

  let faceio: any;
  useEffect(() => {
    faceio = new faceIO('fioa48b7');
  }, []);

  //we use a useContext hook dispatch to be able to dispatch our user to the state
  const { dispatch } = useContext(userContext);

  //we set up the handle login function
  const handleLogin = async () => {
    try {
      let response = await faceio.authenticate({
        locale: 'auto',
      });
      alert(`
        You have been identified successfully
        Unique Facial ID: ${response.facialId}
          PayLoad: ${JSON.stringify(response.payload)}
          `);

      dispatch({ type: actionTypes.SET_USER, user: response.payload });

      alert('You have successfully logged in');
    } catch (error) {
      console.log(error);
      alert('Failed to login, please refresh and try again');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold text-blue-600 mb-4'>
        Welcome, please login
      </h1>
      <button onClick={handleLogin} className='w-full p-3  bg-blue-700 rounded-md text-white text-sm mb-4'>
        Login
      </button>

      <div>
        <p>You don't have an account? Please sign-up.</p>
        <Link to='/signup'>
          <button
            
            className='w-full p-3 bg-white outline-blue-800 rounded-md text-blue-800 text-sm mb-4'
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
