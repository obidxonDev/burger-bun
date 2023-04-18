import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import banner from '../../assets/banner.jpg'
import burgerIcon from '../../assets/logo.png'
import snackIcon from '../../assets/icon1.png'
import coffeIcon from '../../assets/icon.png'
import videoImg from '../../assets/videoBackground.jpg'
import ReactPlayer from 'react-player/youtube'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import './Home.css'

function Home() {
  const [videoPlay, setVideoPlay] = useState(false)
  
  return (
    <div className='home__wrapper'>
      <div className="main__banner">
        <div className="banner__img">
          <img src={banner} alt="" />
        </div>
        <div className="banner__data">
          <div className="banner__data__box container">
            <h3>Delight your Best.</h3>
            <h1>Steak Burger</h1>
            <p>We are dedicated to the safety of our guests and employees and have updated our safety measures. Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo.</p>
            <div className="buttons">
              <Link to="/">See Menu</Link>
              <Link to="/">Book a table</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__story">
        <div className="second__banner container">
          <div className="video__container">
            <AiOutlinePlayCircle className='video__play__icon' onClick={() => setVideoPlay(true)} />
            <img src={videoImg} alt="" />
            <div  className="video__player" onClick={() => setVideoPlay(false)}  style={videoPlay ? { display: 'block' } : { display: "none" }}>
              <ReactPlayer className="video" url="https://www.youtube.com/watch?time_continue=3&v=dCVEY88Fn1k&embeds_euri=https%3A%2F%2Fdemo.w3layouts.com%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=CookingShooking" />
            </div>
          </div>
          <div className="second__banner__data">
            <h5>Our Story</h5>
            <h3>Burgers! You won't Find Anywhere Else with Best Quality <span>Ingredients</span></h3>
            <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, consequatur voluptatem ad.</p>
            <div><Link to="/" className='link'>Read More</Link></div>
          </div>
        </div>
      </div>
      <div className="mini__menu__container">
        <div className="mini__menu container">
          <div className="menu__item__1">
            <img src={burgerIcon} alt="" />
            <h4>Burgers</h4>
            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
            <h5>View All</h5>
          </div>
          <div className="menu__item__1">
            <img src={snackIcon} alt="" />
            <h4>Snacks</h4>
            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
            <h5>View All</h5>
          </div>
          <div className="menu__item__1">
            <img src={coffeIcon} alt="" />
            <h4>Beverages</h4>
            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
            <h5>View All</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home