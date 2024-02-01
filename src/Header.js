// import React from 'react'
// import './Header.css'
// import SearchIcon from '@material-ui/icons/Search';
// import HeaderOption from './HeaderOption';
// import HomeIcon from '@material-ui/icons/Home';
// import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
// import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
// import ChatIcon from "@material-ui/icons/Chat"
// import NotificationsIcon from "@material-ui/icons/Notifications"


// function Header() {
//   return (
//     <div className='header'>
//         <div className='header__left'>
//             <img src='public\logo192.png' alt='icons8-linkedin-240.png'/>

//             <div className='header__search'>
//               <SearchIcon/>
//               <input type='text'></input>
//             </div>

//         </div>

//         <div className='header__right'>
//           <HeaderOption Icon={HomeIcon} title = 'Home'/>
//           <HeaderOption Icon={SupervisorAccountIcon} title = 'My Network'/>
//           <HeaderOption Icon={BusinessCenterIcon} title = 'Jobs'/>
//           <HeaderOption Icon={ChatIcon} title = 'Messaging'/>
//           <HeaderOption Icon={NotificationsIcon} title = 'Notifications'/>
//           <HeaderOption avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title='me'/>
//         </div>


//     </div>
//   )
// }

// export default Header

import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { useDispatch} from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const logoutApp =()=>{
    dispatch(logout())
    auth.signOut();
  };
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='public\logo192.png' alt='icons8-linkedin-240.png'/>

            <div className='header__search'>
              <SearchIcon/>
              <input type='text' placeholder='Search'></input>
            </div>

        </div>

        <div className='header__right'>
          <HeaderOption Icon={HomeIcon} title = 'Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title = 'My Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title = 'Jobs'/>
          <HeaderOption Icon={ChatIcon} title = 'Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title = 'Notifications'/>
          <HeaderOption title='me'
            onClick={logoutApp}
          />
        </div>


    </div>
  )
}

export default Header