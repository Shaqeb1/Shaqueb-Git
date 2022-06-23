import React from 'react'
import video1 from '../assets/videos/video1.mp4'
import './Home.css'
import mensVideo from '../assets/videos/mens-video-1.mp4'
import handbag from '../assets/images/handbag.jpg'
import heels from '../assets/videos/heels.mp4'

const Home = () => {
  return (
    <>
        <section className='first-section'>
            <div className='video-container'>
                <video autoPlay loop muted id='first-section-video'>
                    <source src={video1} />
                </video>
            </div>
            <div className='section-explore'>
                <h2 className='section-explore-heading'>
                    Women's Collection 2022
                </h2>
                <div className='discover-button'>
                    Discover Collection
                </div>
            </div>
        </section>
        <section className='section-gap'>
            <div className='section-gap-heading-container'>
                <h2 className='section-gap-heading'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, facere! Libero
                </h2>
            </div>
        </section>
        <section className='second-section'>
                <video id='second-section-video' loop autoPlay muted>
                    <source src={mensVideo} />
                </video>
            <div className='second-section-explore'> 
                <h2 className='second-section-explore-heading'>Men's Collection 2022</h2>
                <div className='second-discover-button'>Discover Collection</div>
            </div>
        </section>
         <section className='section-gap'>
            <div className='section-gap-heading-container'>
                <h2 className='section-gap-heading'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, facere! Libero
                </h2>
            </div>
        </section>
        <section className='third-section'>
           <img className='third-section-handbag-image' src={handbag} alt="women-handbag" />
            <div className='third-section-explore'>
                <h2 className='third-section-explore-heading'>Premium handbags</h2>
                <div className='third-discover-button'>Explore</div>
            </div>
        </section>
        <section className='section-gap'>
            <div className='section-gap-heading-container'>
                <h2 className='section-gap-heading'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, facere! Libero
                </h2>
            </div>
        </section>


         <section className='fourth-section'>
           <video id='fourth-section-video' loop muted autoPlay>
            <source src={heels} />
           </video>
            <div className='fourth-section-explore'>
                <h2 className='fourth-section-explore-heading'>Heels Collection 2022</h2>
                <div className='fourth-discover-button'>Explore</div>
            </div>
        </section>

        <section className='section-gap'>
            <div className='section-gap-heading-container'>
                <h2 className='section-gap-heading'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, facere! Libero
                </h2>
            </div>
        </section>
    </>
  )
}

export default Home