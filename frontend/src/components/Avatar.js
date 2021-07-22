import React from 'react'
import {Image} from 'react-bootstrap'

function Avatar() {
    return (
        <div className='avatarDiv'>
            <span style={{paddingRight: '3%'}}><Image className='avatarImage'  src='../Assets/UA1.png' /></span>
            <span style={{paddingRight: '3%'}}><Image className='avatarImage'  src='../Assets/UA2.png' /></span>
            <span style={{paddingRight: '3%'}}><Image className='avatarImage'  src='../Assets/UA3.png' /></span>
            <span style={{paddingRight: '3%'}}><Image className='avatarImage'  src='../Assets/UA4.png' /></span>
            <span style={{paddingRight: '3%'}}><Image className='avatarImage'  src='../Assets/UA5.png' /></span>
            <span style={{paddingRight: '3%'}}><Image className='avatarImage'  src='../Assets/UA6.png' /></span>
            <span style={{paddingRight: '3%'}}><Image className='avatarImage'  src='../Assets/UA7.png' /></span>
            <span style={{paddingRight: '3%'}}><Image className='avatarImage'  src='../Assets/UA8.png' /></span>
        </div>
    )
}

export default Avatar
