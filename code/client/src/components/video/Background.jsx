import React from 'react'
// import videoBg from '../../assets/video/video_3.mp4'
import './style.css'

const Background = () => {
  return (
    <div className='videoBg'>
      <div className="overlay"></div>
      <video id="video" src="/assets/video/video.mp4" type='video/mp4' muted loop autoPlay />
    </div>
  )
}

export default Background