import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Edit from "../imgaes/edit.png"
import Delete from "../imgaes/delete.png"
import "./single.css"

import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div>
        <Navbar />
          <div className='single'>
            <div className='singlecontent'>
              <img className='singlecontentimg' src='https://envato-shoebox-0.imgix.net/a0f6/fef2-20e5-4604-825a-51a73c499a21/DSC_6685.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=62852a4cc5a20d263cabdd5b2c098a32' alt=''/>
              <div className='singleuser'>
                <img className='singleuserimg' src='https://www.freepnglogos.com/uploads/naruto-png/naruto-kombat-animes-agosto-5.png' alt=''/>
                <div className='singleinfo'>
                  <span className='singlespan'>Johny</span>
                  <p>Posted 2 days ago</p>
                </div>
                <div className='edit'>
                  <Link to={`/write?edit=2`}>
                    <img src={Edit} alt=''/>
                  </Link>
                  <img src={Delete} alt=''/>
                </div>
              </div>
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
              <p1>
              
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis,Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
                <br/>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis,Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
                <br  /><br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis,Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis,Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
                <br  />
                <br  />
              </p1>
            </div>
            <Menu />
          </div>
        <Footer />
    </div>
  )
}

export default Single