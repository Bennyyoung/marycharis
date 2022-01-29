import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const BecomeAMember = () => {
 const [value, setValue] = useState();
 return <div className="container">
  <div className="col s12 m6 l5" style={{ marginTop: '20px' }}>
   <div className="row">
    <h4 style={{textAlign: 'center'}}>Become a Member or Volunteer</h4>
    <form className="col s12">
     <div className="row">
      <div className="row">
       <div className="input-field col s12">
        <label>First Name</label>
        <input id="name" name="first_name" type="text" className="active validate" required />
       </div>
      </div>
      <div className="row">
       <div className="input-field col s12">
        <label>Last Name</label>
        <input id="name" name="last_name" type="text" className="active validate" required />
       </div>
      </div>

      <div className="row">
       <div className="input-field col s12">
        <label>Email</label>
        <input id="email" type="email" name="email" className="validate" required />
       </div>
      </div>

      <div className="row">
       <div className="input-field col s12">
        <PhoneInput
         international
         value={value}
         onChange={setValue} />
       </div>
      </div>



      <div className="row">
       <div className="input-field col s12">
        <label>Address 1</label>
        <textarea id="address" className="materialize-textarea"></textarea>
       </div>
      </div>

      <div className="row">
       <div className="input-field col s12">
        <label>Address 2</label>
        <textarea id="address" className="materialize-textarea"></textarea>
       </div>
      </div>

      <div className="row">
       <div className="input-field col s12">
        <label>City</label>
        <input id="city" type="text" className="active validate" />
       </div>
      </div>
      <div className="row">
       <div className="input-field col s12">
        <label>State/Province</label>
        <input id="state_or_province" type="text" className="active validate" />
       </div>
      </div>
      <div className="row">
       <div className="input-field col s12">
        <label>Postal/Zip Code</label>
        <input id="postal_zipcode" type="number" className="materialize-textarea" />
       </div>
      </div>

      <h5>Ways to participate</h5>
      <div className="row">

       <p className="col m4 s12">
        <label>
         <input type="radio" name="group1" className="with-gap" />
         <span>Become a Member</span>
        </label>
       </p>
       <p className="col m4 s12">
        <label>
         <input type="radio" name="group1" className="with-gap" />
         <span>Become a Volunteer</span>
        </label>
       </p>
      </div>

      <div className="row">
       <div className="input-field col s12">
        <label>Kindly leave a Comment</label>
        <input id="comments" type="text" />
       </div>
      </div>

      <h5>Please kindly tick below areas you would like to Support the Organization</h5>
      <div className="row">

       <p className="col m4 s12">
        <label>
         <input type="checkbox" />
         <span>Prayer and Councelling</span>
        </label>
       </p>
       <p className="col m4 s12">
        <label>
         <input type="checkbox" />
         <span>Clothing/Making needs</span>
        </label>
       </p>
       <p className="col m4 s12">
        <label>
         <input type="checkbox" />
         <span>Voluntary Worker</span>
        </label>
       </p>

      </div>

      <div className="row">
       <p className="col m4 s12">
        <label>
         <input type="checkbox" />
         <span>Visitation to the needy</span>
        </label>
       </p>
       <p className="col m4 s12">
        <label>
         <input type="checkbox" />
         <span>Cheque</span>
        </label>
       </p>
       <p className="col m4 s12">
        <label>
         <input type="checkbox" />
         <span>Education</span>
        </label>
       </p>

      </div>

      <div className="row">
       <p className="col m4 s12">
        <label>
         <input type="checkbox" />
         <span>Hospital of Care giver needs</span>
        </label>
       </p>


      </div>

      <h5>Method of Donation</h5>
      <div className="row">

       <p className="col m4 s12">
        <label>
         <input type="radio" name="group1" className="with-gap" />
         <span>Monthly</span>
        </label>
       </p>
       <p className="col m4 s12">
        <label>
         <input type="radio" name="group1" className="with-gap" />
         <span>Quarterly</span>
        </label>
       </p>
       <p className="col m4 s12">
        <label>
         <input type="radio" name="group1" className="with-gap" />
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

};

export default BecomeAMember;
