import React from 'react'
import './HomeVideo.css'
import mens from '../../assets/videos/mens.mp4'
import women from '../../assets/videos/women.mp4'

const HomeVideo = () => {
  return (
    <>
        <main className='home-container'>
          <section className='first-section'>
            <div className='first-section-video-container'>
              <video autoPlay muted loop id='first-section-video'>
                <source src={mens} type='video/mp4' />
              </video>
            </div>
            <div className='first-explore-button-container'>
              <h2 className='first-explore-heading'>Men's Collection 2022</h2>
              <div className='first-explore-button'>Discover Collection</div>
            </div>
          </section>
          <section className='second-section'>
            <div className='second-section-video-container'>
              <video autoPlay loop muted id='second-section-video'>
                <source src={women} type='video/mp4'/>
              </video>
            </div>
            <div className='second-explore-button-container'>
              <h2 className='second-explore-heading'>Women's Collection 2022</h2>
              <div className='second-explore-button'>Discover Collection</div>
            </div>
          </section>
        </main>
    </>
  )
}

export default HomeVideo