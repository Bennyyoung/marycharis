import React from 'react';
import QuoteItem from './QuoteItem';

const Quote = () => {
  return (
    <div className='container center'>
      <h1 className='center'>Why Care</h1>
      <br />
      <QuoteItem red='11.5% of people' text=' defecate in the open.' />
      <QuoteItem red='79 million people' text=' lack decent toilets.' />
      <QuoteItem
        red='45% of children'
        text=' under the age of five are stunted.'
      />
      <QuoteItem
        red='22 million people'
        text=' don’t have access to clean water close to home.'
      />
      <QuoteItem
        red='98% of the richest'
        text=' people and only 79.2% of the poorest people in Pakistan have clean water.'
      />
      <QuoteItem
        red='19,500 children'
        text=' under five die each year from diarrhoeal related diseases'
      />
    </div>
  );
};

export default Quote;
