import React, { useEffect } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGO } from './constant';
import { addUser, removeUser } from '../utils/userSlice'; // Ensure this is the correct import path

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, [auth, dispatch, navigate]);

  const handleGptSearchClick = () => {
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
  };

  return (
    <>
      <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <div className='flex'>
          <img className='w-44' src={LOGO} alt='Logo' />
          <p className='text-red-600 font-semibold text-5xl py-2'>-GPT</p>
        </div>
        {user && (
          <div className='flex p-2'>
            <button
              className='py-2 px-4 m-2 bg-purple-500 text-white rounded-lg'
              onClick={handleGptSearchClick}
            >
              GPT Search
            </button>
            <img
              alt='usericon'
              src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
              className='w-12 h-12 m-2'
            />
            <button className='font-bold text-white' onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
