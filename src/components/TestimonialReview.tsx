import React from 'react';
import Review from './Review';

const TestimonialReview: React.FC = () => {
  return (
    <main>
      <section className="testimonial_container">
        <div className="title">
          <h2>Testimonials</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default TestimonialReview;
