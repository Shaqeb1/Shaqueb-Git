import React from 'react'

const ImageList = ({ images }) => {
  return images.map((image) => (
    <div className='images' key={image.id}>
      <img src={image.urls.raw} alt='' />
    </div>
  ))
}

export default ImageList
