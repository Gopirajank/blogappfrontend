import React from 'react';
import Sidebar from '../components/Sidebar';
import SinglePost from '../components/SinglePost';
import './single.css';

const Single = () => {
  return (
    <div className='single'>
      <SinglePost className='single-post' />
      <Sidebar className='sidebar' />
    </div>
  );
}

export default Single;
