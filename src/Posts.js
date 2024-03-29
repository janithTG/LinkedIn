import React from 'react'
import './Posts.css'
import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'

function Posts({name, description, message, photoUrl}) {
  return (
    <div className='posts'>
        <div className='post__header'>
            <Avatar/>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray'/>
            <InputOption Icon={ChatOutlined} title='Comment' color='gray'/>
            <InputOption Icon={ShareOutlined} title='Share' color='gray'/>
            <InputOption Icon={SendOutlined} title='Send' color='gray'/>
        </div>
    </div>
  )
}

export default Posts