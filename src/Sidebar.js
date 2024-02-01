import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>

        </div>
    );

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.2' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Sonny Sangha</h2>
            <h4>sonny.gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
             <div className='sidebar__stat'>
                <p>Who Viewed You</p>
                <p className='sidebar__ststNumber'>
                    2,456
                </p>
             </div>

             <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__ststNumber'>
                    4,890
                </p>
            </div>      
        </div>

        <div className='sidebar__buttom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('java')}
            {recentItem('python')}
            {recentItem('ruby')}
        </div>

    </div>
  )
}

export default Sidebar