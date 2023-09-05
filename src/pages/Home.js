import React, { useEffect, useState, useLocation  } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';
import "./home.css"
import axios from 'axios';

const Home = () => {
  const [posts,setPosts] = useState([]);
  const  {search} = useLocation();
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  

  return (
    <div>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
