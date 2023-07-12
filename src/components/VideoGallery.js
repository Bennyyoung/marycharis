import React from 'react'
import videos1 from '../data/videos1'
import videos2 from '../data/videos2'
import videos3 from '../data/videos3'

const VideoGallery = () => {
 return (
  <div>
   <div className='center'>
    <h4>Gallery</h4>
   </div>
   <div className='row' style={{marginRight: '5rem', marginLeft: '5rem'}}>
    <div className="col s12">
     <p className="flow-text">Fun Fiar Event</p>
    </div>
    <div>
     {videos1.map((video) => {
      return (
       <video style={{padding: '2rem'}} key={video.id} src={video.url} controls />
      )
     })}
    </div>
   </div>

   <div className='row' style={{marginRight: '5rem', marginLeft: '5rem'}}>
    <div className="col s12">
     <p className="flow-text">These events took place on the 30th December 2022. It was the usual Annual Programme of "FOOD F.A.I.R- GO TO WHERE THEY ARE.</p>
    </div>
    <div>
     {videos2.map((video) => {
      return (
       <video style={{padding: '2rem'}} key={video.id} src={video.url} controls />
      )
     })}
    </div>
   </div>

   <div className='row' style={{marginRight: '5rem', marginLeft: '5rem'}}>
    <div className="col s12">
     <p className="flow-text">These events took place on the 30th December 2022. It was the usual Annual Programme of "FOOD F.A.I.R- GO TO WHERE THEY ARE.</p>
    </div>
    <div>
     {videos3.map((video) => {
      return (
       <video style={{padding: '2rem', width: "50px"}} key={video.id} src={video.url} controls />
      )
     })}
    </div>
   </div>

  </div>
 )
}

export default VideoGallery