import React from 'react'
import './HomeVideo.css'
import mens from '../../assets/videos/mens.mp4'
import women from '../../assets/videos/women.mp4'
import { Link } from 'react-router-dom'

const HomeVideo = () => {
  return (
    <>
    {/* Main Container */}
        <main className='home-container'>
          {/* Mens Section */}
          <section className='first-section'>
            <div className='first-section-video-container'>
              {/* Mens Section Video */}
              <video autoPlay muted loop id='first-section-video'>
                <source src={mens} type='video/mp4' />
              </video>
            </div>
            {/* Discover Button */}
            <div className='first-explore-button-container'>
              <h2 className='first-explore-heading'>Men's Collection 2022</h2>
              <Link to='/men' className='first-explore-button'>Discover Collection</Link>
            </div>
          </section>
          {/* Women's Section */}
          <section className='second-section'>
            <div className='second-section-video-container'>
              {/* Women's Section video */}
              <video autoPlay loop muted id='second-section-video'>
                <source src={women} type='video/mp4'/>
              </video>
            </div>
            {/* Discover Button */}
            <div className='second-explore-button-container'>
              <h2 className='second-explore-heading'>Women's Collection 2022</h2>
              <Link to='/women' className='second-explore-button'>Discover Collection</Link>
            </div>
          </section>
        </main>
    </>
  )
}

export default HomeVideo