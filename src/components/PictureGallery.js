import React from 'react'
import pictures1 from '../data/pictures1'

const PictureGallery = () => {
 return (
  <div>
   <div className='row' style={{marginRight: '5rem', marginLeft: '5rem'}}>
    <div className="col s12">
     <p className="flow-text">@Marycharis Foundation With JOHNEVERGREEN</p>
    </div>
    <div>
     {pictures1.map((picture) => {
      return (
       <img style={{padding: '2rem'}} key={picture.id} src={picture.url} />
      )
     })}
    </div>
   </div>

  </div>
 )
}

export default PictureGallery