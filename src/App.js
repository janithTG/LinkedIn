// import React from 'react';
// // import logo from './logo.svg';
// import {useSelector} from 'react-redux'
// import './App.css';
// import {selectUser} from './features/userSlice'
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Feed from './Feed';

// function App() {

//   // const user = useSelector(selectUser)
//   return (
//     <div className="app">

//       {/*Header*/}
//       <Header/>

//       {/*App Body*/}
//       <div className='app__body'>
//         <Sidebar/>
//         <Feed/>
//       </div>

//     </div>
//   );
// }

// export default App;

// App.js
import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import store from './app/store';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
  auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL
      }));
    } else {
      dispatch(logout());
    }
  });
}, [dispatch]);

return (
  <div className="app">
    <Header />

    {!user ? (
      <Login />
    ) : (
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    )}
  </div>
);
}

export default App;
