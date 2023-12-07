// SignUp.js
import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUp = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/log-in');
  };

  const handleBack = () => {
    navigate('/');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <motion.div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("../../assets/login2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.9)",
      }}
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{ x: window.innerWidth, transition:{duration:0.1}}}
    >
    <div className="min-h-screen flex items-center flex-col justify-center">
      <motion.div className="w-full max-w-md p-4 rounded-md"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-white text-center">Sign Up</h2>
        <form className="mt-8 space-y-5" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 text-black rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 text-black focus:outline-none rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 text-black rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="text-white text-sm font-medium focus:outline-none transition-transform hover:scale-105"
            >
              Already have an account? Log In
            </button>
          </div>
        </form>
      </motion.div>
      <button
          onClick={handleBack}
          className="text-white text-sm font-medium focus:outline-none transition-transform hover:scale-105"
        >
          Back to Home
        </button>
    </div>
    </motion.div>
  );
};

export default SignUp;
