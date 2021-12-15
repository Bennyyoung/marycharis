import React from 'react';
import { Fragment } from 'react';

const QuoteItem = props => {
  return (
    <Fragment>
      <h5>
        <blockquote>
          <span className='red-text'>{props.red}</span> {props.text}
        </blockquote>
        <br />
      </h5>
    </Fragment>
  );
};

export default QuoteItem;
