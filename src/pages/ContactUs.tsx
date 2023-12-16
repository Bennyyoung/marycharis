import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

interface FormValues {
  name: string;
  email: string;
  phone_number: string;
  address: string;
  comments: string;
}

export default function ContactUs() {
  const [value, setValue] = useState<string | undefined>();
  const [state, handleSubmit] = useForm("mlezjglv");

  if (state.succeeded) {
    return (
      <div className="container">
        <div style={{ border: '2px solid black', backgroundColor: 'rgb(206, 95, 252)', margin: '3rem', padding: '3rem' }}>
          <h2 style={{ color: 'white' }}>Thank You For Your Submission</h2>
          <button className="btn waves-effect waves-light"><Link style={{ textDecoration: 'none', color: 'white', }} to="/"><span className="material-icons">Return Home</span></Link></button>
        </div>
      </div>
    );
  }

  return (
    <div className="container row">
      <div className="col s12 m6 l7">
        <h2><strong>Get in touch/Member</strong></h2>
        <address>
          {/* Rest of the code remains unchanged */}
        </address>
      </div>

      <div className="col s12 m6 l5" style={{ marginTop: '20px' }}>
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" name="name" className="active validate" required />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" className="validate" name="email" required />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="phone_number">Phone Number</label>
                  <PhoneInput
                    international
                    value={value}
                    onChange={setValue}
                    name="phone_number" />
                  <ValidationError
                    prefix="Phone Number"
                    field="phone_number"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="address">Address</label>
                  <textarea id="address" className="materialize-textarea" name="address"></textarea>
                  <ValidationError
                    prefix="Address"
                    field="address"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="comments">Comments</label>
                  <input id="comments" type="text" name="comments" />
                  <ValidationError
                    prefix="Comments"
                    field="comments"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
