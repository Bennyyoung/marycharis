import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address_1: string;
  address_2: string;
  city: string;
  state_or_province: string;
  postal_zipcode: number;
  comment: string;
}

const BecomeAMember: React.FC = () => {
  const [value, setValue] = useState('');
  const [state, handleSubmit] = useForm("mqknpeln");

  if (state.succeeded) {
    return (
      <div className="container">
        <div style={{ border: '2px solid black', backgroundColor: 'rgb(206, 95, 252)', margin: '3rem', padding: '3rem' }}>
          <h2 style={{ color: 'white' }}>Thank You For Your Submission</h2>
          <button className="btn waves-effect waves-light">
            <Link style={{ textDecoration: 'none', color: 'white', }} to="/">
              <span>Return Home</span>
            </Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
    <div className="col s12 m6 l5" style={{ marginTop: '20px' }}>
          <div className="row">
            <h4 style={{ textAlign: 'center' }}>Become a Member or Volunteer</h4>
            <form className="col s12" onSubmit={handleSubmit}>
              <div className="row">
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="first_name">First Name</label>
                    <input id="name" name="first_name" type="text" className="active validate" required />
                    <ValidationError
                      prefix="First Name"
                      field="first_name"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="last_name">Last Name</label>
                    <input id="name" name="last_name" type="text" className="active validate" required />
                    <ValidationError
                      prefix="Last Name"
                      field="last_name"
                      errors={state.errors}
                    />
                  </div>
                </div>
    
                <div className="row">
                  <div className="input-field col s12">
                    <label>Email</label>
                    <input id="email" type="email" name="email" className="validate" required />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
    
                <div className="row">
                  <div className="input-field col s12">
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
                    <label>Address 1</label>
                    <textarea id="address1" className="materialize-textarea" name="address_1"></textarea>
                  </div>
                  <ValidationError
                    prefix="Address_1"
                    field="address_1"
                    errors={state.errors}
                  />
                </div>
    
                <div className="row">
                  <div className="input-field col s12">
                    <label>Address 2</label>
                    <textarea id="address2" className="materialize-textarea" name="address_2"></textarea>
                    <ValidationError
                      prefix="Address_2"
                      field="address_2"
                      errors={state.errors}
                    />
                  </div>
                </div>
    
                <div className="row">
                  <div className="input-field col s12">
                    <label>City</label>
                    <input id="city" type="text" name="city" className="active validate" />
                    <ValidationError
                      prefix="City"
                      field="city"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label>State/Province</label>
                    <input id="state_or_province" type="text" name="state_or_province" className="active validate" />
                    <ValidationError
                      prefix="State/Province"
                      field="state_or_province"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label>Postal/Zip Code</label>
                    <input id="postal_zipcode" type="number" name="postal_zipcode"/>
                    <ValidationError
                      prefix="Postal/Zipcode"
                      field="postal_zipcode"
                      errors={state.errors}
                    />
                  </div>
                </div>
    
                <h5>Ways to participate</h5>
                <div className="row">
    
                  <p className="col m4 s12">
                    <label>
                      <input id="become_a_member" type="radio" name="Become_A_Member" className="with-gap" />
                      <ValidationError
                        prefix="Become_A_Member"
                        field="become_a_member"
                        errors={state.errors}
                      />
                      <span>Become a Member</span>
                    </label>
                  </p>
                  <p className="col m4 s12">
                    <label>
                      <input type="radio" name="Become A Volunteer" className="with-gap" />
                      <ValidationError
                        prefix="Become A Volunteer"
                        field="become a volunteer"
                        errors={state.errors}
                      />
                      <span>Become a Volunteer</span>
                    </label>
                  </p>
                </div>
    
                <div className="row">
                  <div className="input-field col s12">
                    <label>Kindly leave a Comment</label>
                    <input id="comments" name="comment" type="text" />
                    <ValidationError
                      prefix="Comment"
                      field="comment"
                      errors={state.errors}
                    />
                  </div>
                </div>
    
                <h5>Please kindly tick below areas you would like to Support the Organization</h5>
                <div className="row">
    
                  <p className="col m4 s12">
                    <label>
                      <input type="checkbox" name="Prayer and Counselling" />
                      <span>Prayer and Counselling</span>
                      <ValidationError
                        prefix="Prayer and Counselling"
                        field="prayer and counselling"
                        errors={state.errors}
                      />
                    </label>
                  </p>
                  <p className="col m4 s12">
                    <label>
                      <input type="checkbox" name="Clothing/Making needs" />
                      <span>Clothing/Making needs</span>
                      <ValidationError
                        prefix="Clothing/Making needs"
                        field="clothing/making needs"
                        errors={state.errors}
                      />
    
                    </label>
                  </p>
                  <p className="col m4 s12">
                    <label>
                      <input type="checkbox" name="Voluntary Worker" />
                      <span>Voluntary Worker</span>
                      <ValidationError
                        prefix="Voluntary Worker"
                        field="voluntary worker"
                        errors={state.errors}
                      />
                    </label>
                  </p>
    
                </div>
    
                <div className="row">
                  <p className="col m4 s12">
                    <label>
                      <input type="checkbox" name="Visitation to the needy" />
                      <span>Visitation to the needy</span>
                      <ValidationError
                        prefix="Visitation to the needy"
                        field="visitation to the needy"
                        errors={state.errors}
                      />
                    </label>
                  </p>
                  <p className="col m4 s12">
                    <label>
                      <input type="checkbox" name="Cheque" />
                      <ValidationError
                        prefix="Cheque"
                        field="cheque"
                        errors={state.errors}
                      />
                      <span>Cheque</span>
                    </label>
                  </p>
                  <p className="col m4 s12">
                    <label>
                      <input type="checkbox" name="Education" />
                      <ValidationError
                        prefix="Education"
                        field="education"
                        errors={state.errors}
                      />
                      <span>Education</span>
                    </label>
                  </p>
    
                </div>
    
                <div className="row">
                  <p className="col m4 s12">
                    <label>
                      <input type="checkbox" name="Hospital of Care giver" />
                      <ValidationError
                        prefix="Hospital of care giver"
                        field="hospital of care giver"
                        errors={state.errors}
                      />
                      <span>Hospital of Care giver needs</span>
                    </label>
                  </p>
    
    
                </div>
    
                <h5>Method of Donation</h5>
                <div className="row">
    
                  <p className="col m4 s12">
                    <label>
                      <input type="radio" name="Monthly" className="with-gap" />
                      <ValidationError
                        prefix="Monthly"
                        field="monthly"
                        errors={state.errors}
                      />
                      <span>Monthly</span>
                    </label>
                  </p>
                  <p className="col m4 s12">
                    <label>
                      <input type="radio" name="quarterly" className="with-gap" />
                      <ValidationError
                        prefix="Quarterly"
                        field="quarterly"
                        errors={state.errors}
                      />
                      <span>Quarterly</span>
                    </label>
                  </p>
                  <p className="col m4 s12">
                    <label>
                      <input type="radio" name="yearly" className="with-gap" />
                      <ValidationError
                        prefix="Yearly"
                        field="yearly"
                        errors={state.errors}
                      />
                      <span>Yearly</span>
                    </label>
                  </p>
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
    
        </div>;
    
      </div>
  );
};

export default BecomeAMember;
