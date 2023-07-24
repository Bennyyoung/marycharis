import React from 'react';

interface Style {
  a: React.CSSProperties;
}

const SocialMedia: React.FC = () => {
  const style: Style = {
    a: {
      color: 'white',
      fontSize: '1.6rem',
      paddingRight: '4px',
    },
  };

  return (
    <div>
      <a style={style.a} href="https://twitter.com/MaryCharis2">
        <ion-icon name="logo-twitter"></ion-icon>
      </a>
      <a style={style.a} href="https://www.instagram.com/marycharisfoundation">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
      <a
        style={style.a}
        href="https://www.youtube.com/channel/UCVdX2R5IUqPkya5J5BT2FbA"
      >
        <ion-icon name="logo-youtube"></ion-icon>
      </a>
    </div>
  );
};

export default SocialMedia;
