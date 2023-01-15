import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignupSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

const SignupForm = () => {
  let faceio: any;
  useEffect(() => {
    faceio = new faceIO('fioa48b7');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iuser>({
    resolver: yupResolver(SignupSchema),
  });

  //create  a submit function that will submit the data
  const onSubmit = (data: Iuser) => {
    alert(JSON.stringify(data));

    handleSignUp(data);
  };

  //create a signup function that will submit the data to faceIO by calling the function faceIO enroll
  const handleSignUp = async (user: Iuser): Promise<any> => {
    try {
      let response: any = await faceio.enroll({
        locale: 'auto',
        payload: {
          name: `${user.name}`,
          email: `${user.email}`,
        },
      });
      alert(
        ` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}
      payload: ${JSON.stringify(response.details)}`
      );
    } catch (error) {
      alert('Unable to register you please refresh page and try again');
    }
  };

  return (
    <div className='max-w-md mx-auto mt-4 bg-yellow-100 p-8 border border-gray-3000'>
      <h1 className='text-3xl font-bold text-blue-600 pb-5'>
        Sign-up form using FaceIO
      </h1>

      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor=''
            className='text-sm font-bold backdrop:bold text-gray-600 block'
          >
            Name
          </label>
          <input
            type='text'
            placeholder='name'
            {...register('name')}
            className='w-full p-2 border border-blue-900 rounded mt-1'
          />
          {errors.name && <p className='text-red-900'>{errors.name.message}</p>}
        </div>
        <div>
          <label
            htmlFor=''
            className='text-sm font-bold backdrop:bold text-gray-600 block'
          >
            Email
          </label>
          <input
            type='text'
            placeholder='email@mail.com'
            {...register('email')}
            className='w-full p-2 border border-blue-900 rounded mt-1'
          />
          {errors.email && (
            <p className='text-red-900'>{errors.email.message}</p>
          )}
        </div>
        <div>
          <button className='w-full py-2 px-4 bg-blue-700 rounded-md text-white text-sm'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
