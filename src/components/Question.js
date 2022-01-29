import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  const style = {
    question: {
      padding: '1rem 1.5rem',
      border: '2px solid hsl(209, 61%, 16%)',
      marginBottom: '1rem',
      borderRadius: '0.25rem',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    h4: {
      textTransform: 'none',
      lineHeight: '1.5',
      marginBottom: '0'
    },
    p: {
      color: 'grey',
      marginBottom: '0',
      marginTop: '0.5rem'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    btn: {
      background: 'transparent',
      borderColor: 'transparent',
      width: '2rem',
      height: '2rem',
      background: '#eae6eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      color: '#b4345c',
      cursor: 'pointer',
      marginLeft: '1rem',
      alignSelf: 'center',
      minWidth: '2rem'
    }
  }
  return (
    <article style={style.question}>
      <header style={style.header}>
        <h6 style={style.h4}><b>Q </b>{title}</h6>
        <button style={style.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo &&  <p style={style.p}><b>A: </b> {info}</p>}
    </article>
  );
}

export default SingleQuestion;
