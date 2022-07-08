import React from 'react'
import PaymentButton from '../components/PaymentButton'

export default function Donate() {
 return (
  <div className="row">
   <div className="col s12 m6 l6" style={{ paddingLeft: '3rem' }}>
    <h4><strong>MBF WELCOMES YOUR SUPPORT IN ALL THESE ENDEAVORS
    </strong></h4>
    <p>MBF is a non-profit, non-description, and Individuals Supported Faith based Organization whose Mission is to provide Fonchbegkin - Fondness for all people (genuine compassion of heart for all human kind, regardless of colour, creed, national origin, economic condition, etc).</p>
    <p>You too can be part of this positive change</p>

    <p><strong>Want to support us by making a direct transfer to our bank account?</strong></p>

    <h6><strong>Domestic Payments ( ₦ )</strong></h6>
    <p>Account Name: <strong>First Bank Nigeria Plc</strong></p>
    <p>Account Name: <strong>MARYCHARIS BENEVOLENCE FOUNDATION</strong></p>
    <p>Account Number: <strong>2041654244</strong></p>
    <br />

    <h6><strong>International Payments ( $ )</strong></h6>
    <p><strong>FIRST BANK OF NIGERIA</strong></p>
    <p>Account Name: <strong>MARYCHARIS BENEVOLENCE FOUNDATION</strong></p>
    <p>IBAN/ACCOUNT NO: <strong>FBNINGLA</strong></p>
    <p>SWIFT CODE: <strong>2041654244</strong></p>
    <p>SORT CODE: <strong>011155229</strong></p>
    <p>ADDRESS: <strong>35 SAMUEL ASABIA HOUSE, MARINA, LAGOS STATE, NIGERIA.</strong></p>
   </div>

   <div className="col s12 m6 l6">
    <h4 style={{ padding: '6rem 0 1rem 0' }}><strong>Donate (₦)</strong></h4>
    <div className="row">
     <div className="col s12 m6 l4">
      <div className="card">
       <div className="card-image">
       </div>
       <div className="card-content">
        <p>Support Inclusion for Child/Needy</p>
       </div>
       <div className="card-action">
        <PaymentButton />
       </div>
      </div>
     </div>

     <div className="col s12 m6 l4">
      <div className="card">
       <div className="card-image">

       </div>
       <div className="card-content">
        <p>Support for Upcoming Project</p>
       </div>
       <div className="card-action">
        <PaymentButton />
       </div>
      </div>
     </div>

     <div className="col s12 m6 l4">
      <div className="card">
       <div className="card-image">

       </div>
       <div className="card-content">
        <p>Save a child/scholarship</p>
       </div>
       <div className="card-action">
        <PaymentButton />
       </div>
      </div>
     </div>
     <div className="col s12 m6 l4">
      <div className="card">
       <div className="card-image">

       </div>
       <div className="card-content">
        <p>Grant</p>
       </div>
       <div className="card-action">
       <PaymentButton />
       </div>
      </div>
     </div>
    </div>




    {/*<h4 style={{ padding: '6rem 0 1rem 0' }}><strong>Donate ($)</strong></h4>
    

       </div>
       <div className="card-content">
        <p>Support Inclusion for Child/Needy</p>
       </div>
       <div className="card-action">
        <PaymentButton />
       </div>
      </div>
     </div>

     <div className="col s12 m6 l4">
      <div className="card">
       <div className="card-image">

       </div>
       <div className="card-content">
        <p>Support for Upcoming Project</p>
       </div>
       <div className="card-action">
        <PaymentButton />
       </div>
      </div>
     </div>

     <div className="col s12 m6 l4">
      <div className="card">
       <div className="card-image">

       </div>
       <div className="card-content">
        <p>Save a child/scholarship</p>
       </div>
       <div className="card-action">
        <PaymentButton />
       </div>
      </div>
     </div>
     <div className="col s12 m6 l4">
      <div className="card">
       <div className="card-image">

       </div>
       <div className="card-content">
        <p>Grant</p>
       </div>
       <div className="card-action">
        <PaymentButton />
       </div>
      </div>
     </div>
    </div> */}

   </div>
  </div>
 )
}
