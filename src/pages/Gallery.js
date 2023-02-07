import React from 'react'
import VideoGallery from '../components/VideoGallery'
import PictureGallery from '../components/PictureGallery'
import OtherArticles from "../components/OtherArticles"

const Gallery = () => {
  return (
    <div>
     <VideoGallery />
     <PictureGallery />
     <OtherArticles />
    </div>
  )
}

export default Gallery