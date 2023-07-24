import { useState } from 'react';
import data from './data';
import SingleQuestion from '../components/Question';
import Media from 'react-media';

interface Question {
  id: number;
  title: string;
  info: string;
}

export default function FAQ() {
  const [questions, setQuestions] = useState<Question[]>(data);

  const style = {
    container: {
      width: '100%',
      margin: '5rem 2rem',
      background: '#fff',
      borderRadius: '0.25',
      padding: '2.5rem 2rem',
      // maxWidth: '920px',
      display: 'grid',
      gap: '1rem 2rem',
    },
    h3: {
      lineHeight: 1.2,
      fontWeight: 500,
      letterSpacing: '0.1rem',
      textTransform: 'capitalize',
      lineHeight: '1.25',
      marginBottom: '0.75rem',
    },
    section: {
      width: '90vw',
      margin: '0 auto',
      maxWidth: '1170px',
    },
    section_small: {
      width: '95vw',
    },
    main: {
      minHeight: '100vh',
      /* using flex because of better browser support */
      display: 'flex',
      width: '30vw',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <main style={style.main}>
      <div style={style.container}>
        <h3 style={style.h3}>Frequently Asked Questions</h3>

        <section style={style.section}>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
