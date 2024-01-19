import React from 'react';
import VideoGallery from '../components/VideoGallery';
import PictureGallery from '../components/PictureGallery';
import OtherArticles from '../components/OtherArticles';
import videos1 from '../data/videos1';
import videos2 from '../data/videos2';
import videos3 from '../data/videos3';

interface Video {
    id: number;
    url: string;
}

const Gallery: React.FC = () => {
    return (
        <div className='container'>

            <VideoGallery />
            <PictureGallery />
            <OtherArticles /> 

        </div>
    );
};

export default Gallery;