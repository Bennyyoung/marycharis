import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'

export default function ContactUs() {
 const [value, setValue] = useState();
 const [state, handleSubmit] = useForm("mlezjglv");
 if (state.succeeded) {
  return (
   <div className="container">
    <div style={{border: '2px solid black', backgroundColor: 'rgb(206, 95, 252)', margin: '3rem', padding: '3rem'}}>
     <h2 style={{color: 'white'}}>Thank You For Your Submission</h2>
     <button className="btn waves-effect waves-light"><Link style={{textDecoration: 'none', color: 'white', }} to="/"><span classsName="material-icons">Return Home</span></Link></button>
    </div>
   </div>
  )
 }

 return (
  <div className="container row">
   <div className="col s12 m6 l7">
    <h2><strong>Get in touch</strong></h2>
    <address>
     <p>MARYCHARIS BENEVOLENCE FOUNDATION</p>
     <p><strong>Phone no 1: </strong>070 5501-8922</p>
     <p><strong>Phone no 2: </strong>091-3444-5646</p>
     <p><strong>Email: </strong>marycharisfoundation@gmail.com</p>

     <p><strong>Address: </strong><span>MBF Secretariat Phase 2 Block F plot 5b Magbon, Imeke, off - Aradagun Iworo-Ajido Road, Badagry Lagos.</span></p>
     <p><strong>Address 2: </strong><span>Annex - Plot 19 Ajisola Oladapo street, Opp ojo Military Cantoment, Ojo Lagos.</span></p>

     <p><strong>PO Box: </strong><span>P.O Box 2574 Festac Town  Lagos.</span></p>

    </address>
   </div>


   <div className="col s12 m6 l5" style={{ marginTop: '20px' }}>
    <div className="row">

     <form className="col s12" onSubmit={handleSubmit}>
      <div className="row">
       <div className="row">
        <div className="input-field col s12">
         <label htmlFor="name">Name</label>
         <input id="name" type="text" name="name" type="text" className="active validate" required />
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
          field="comment"
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
 )
}
