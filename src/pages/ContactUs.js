import React from 'react'

export default function ContactUs() {
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
     <form className="col s12">
      <div className="row">

       <div className="input-field col s12">
        <input placeholder="Name" id="name" type="text" id="name" type="text" className="active validate" required />
       </div>

       <div className="input-field col s12">
        <input placeholder="Email" id="email" type="email" className="validate" required />
       </div>

       <div className="row">
        <div className="input-field col s12">
         <textarea id="address" placeholder="Address" className="materialize-textarea"></textarea>
        </div>
       </div>

       <div className="row">
        <div className="input-field col s12">
         <input placeholder="Comments" id="comments" type="text" />
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
