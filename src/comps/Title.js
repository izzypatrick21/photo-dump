import React from 'react';
import logoImage from '../images/apple-icon-60.png'

const Title = () => {
  return (
    <div className="title">
      <img src={logoImage} alt="logo" style={{ 'marginLeft': '30px' }} />
      <h1>PhotoDump</h1>
      <h2>Your Memories - Pictures</h2>
      <p>Put your absolute best pictures in here.</p>
    </div>
  )
}

export default Title;