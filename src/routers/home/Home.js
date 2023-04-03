import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../assets/banner.jpg'
import './Home.css'

function Home() {
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
            <div className="video">
              <video url="https://www.youtube.com/watch?time_continue=3&v=dCVEY88Fn1k&embeds_euri=https%3A%2F%2Fdemo.w3layouts.com%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=CookingShooking">salom</video>
            </div>
            <div className="second__banner__data">
              <h5>Our Story</h5>
              <h3>Burgers! You won't Find Anywhere Else with Best Quality <span>Ingredients</span></h3>
              <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, consequatur voluptatem ad.</p>
              <Link to="/">Read More</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home