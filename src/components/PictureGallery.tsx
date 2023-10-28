// import React from 'react';
// import pictures1 from '../data/pictures1';

// const PictureGallery = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col s12">
//           <p className="flow-text">@Marycharis Foundation With JOHNEVERGREEN</p>
//         </div>
//         {pictures1.map((picture) => {
//           return (
//             <div className="col s12 m6" key={picture.id}>
//               <div className="card">
//                 <div className="card-image">
//                   <img
//                     className="responsive-img"
//                     style={{ padding: '2rem' }}
//                     src={picture.url}
//                     alt="Gallery Image"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PictureGallery;

import React from 'react';
import pictures1 from '../data/pictures1';

interface Picture {
  id: number;
  url: string;
}

const PictureGallery: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <p className="flow-text">@Marycharis Foundation With JOHNEVERGREEN</p>
        </div>
        {pictures1.map((picture: Picture) => (
          <div className="col s12 m6" key={picture.id}>
            <div className="card">
              <div className="card-image">
                <img
                  className="responsive-img"
                  style={{ padding: '2rem' }}
                  src={picture.url}
                  alt="Gallery Image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureGallery;
