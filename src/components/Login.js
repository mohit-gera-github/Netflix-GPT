import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const togleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/IN-en-20241202-TRIFECTA-perspective_052fb757-35ce-4655-946e-3c9ffac95fd0_large.jpg'
          alt='Backgound ' />
      </div>
      <form className='absolute w-1/4 bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-md'>
        <h1 className='text-3xl font-bold py-4'>
          {(isSignInForm) ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type='text'
          placeholder='Full Name'
          className='p-2 my-4 w-full  bg-gray-700 rounded-md'
        />}
        <input
          type='text'
          placeholder='Email Address'
          className='p-2 my-4 w-full bg-gray-700 rounded-md'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-2 my-4 w-full  bg-gray-700 rounded-md'
        />
        <button
          className='p-4 my-4 bg-red-600 w-full  rounded-md'>
          {(isSignInForm) ? "Sign In" : "Sign Up"}
        </button>
        <p
          className='py-4 cursor-pointer'
          onClick={togleSignInForm}>
          {(isSignInForm) ? "New to Netflix-GPT? Sign Up Now" : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login