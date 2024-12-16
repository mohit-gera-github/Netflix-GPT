import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGO } from './constant';

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <>
      <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
        <div className='flex'> 
        <img
          className='w-44'
          src={LOGO}
          alt='Logo'
        />
        <p className='text-red-600 font-semibold text-5xl py-2 text-'>-GPT</p>
        </div>
        {user && (
          <div className='flex p-2'>
            <img
              alt='usericon'
              src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
              className='w-12 h-12 m-2'
            />
            <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Header