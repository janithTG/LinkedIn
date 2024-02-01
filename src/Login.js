// Login.js
import React, { useState } from 'react';
import './Login.css';
import { auth, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from './firebase';  // Make sure the import is correct
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }));
      })
      .catch(error => alert(error.message));
  };

  const register = () => {
    if (!name) {
      return alert('Please enter a full name!');
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        if (user) {
          // Update user's profile directly
          return Promise.all([
            updateProfile(user, { displayName: name, photoURL: profilePic }),
            // Add any other relevant updates here
          ]);
        } else {
          throw new Error('User object not available after registration');
        }
      })
      .then(() => {
        dispatch(login({
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          displayName: name,
          photoUrl: profilePic
        }));
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email address is already in use. Please use a different email.');
        } else {
          alert(error.message);
        }
      });
  };
  
  

  return (
    <div className='login'>
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q__lr0Vks"
        alt=''
      />

      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name (Required if registering)' type='text' />
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile Picture URL' type='text' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email (Required if registering)' type='email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />
        <button type='submit' onClick={loginToApp}>Sign in</button>
      </form>

      <p>
        Not a member?
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
