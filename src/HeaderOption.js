// import React from 'react'
// import './HeaderOption.css';
// import { Icon } from '@material-ui/core';
// import {Avatar} from '@material-ui/core'

// function HeaderOption({avatar,Icon, title}) {
//   return (
//     <div className='headerOption'>
//         {Icon && <Icon className ='headerOption__icon'/> }
//         {avatar && <Avatar className = 'headerOption__icon' src={avatar}/>}
//         <h3 className='headerOption__title'>
//             {title}
//         </h3>

//     </div>
//   )
// }

// export default HeaderOption
import React from 'react'
import './HeaderOption.css';
// import { Icon } from '@material-ui/core';
import {Avatar} from '@material-ui/core'
import {  useSelector } from 'react-redux';
import {  selectUser } from './features/userSlice';

function HeaderOption({avatar,Icon, title , onClick}) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className ='headerOption__icon'/> }
        {avatar && <Avatar className = 'headerOption__icon' src={user?.photoUrl}>{user?.email[0]}</Avatar>}
        <h3 className='headerOption__title'>
            {title}
        </h3>

    </div>
  )
}

export default HeaderOption