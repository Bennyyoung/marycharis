import React from 'react'

export default function ContactUs() {
 return (
  <div className="container">
   <div className="col s12 m6 l5">
    <h2><strong>Get in touch</strong></h2>
    <p>MBF</p>
    <p>[Phone number]</p>
    <p>[Email]</p>
    <p>[Address]</p>
   </div>

   <div className="col s12 m6 l5">
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
