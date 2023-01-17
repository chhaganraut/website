import React from 'react'
import '../contact.css';

export default function Contact() {
  return (

    <div className='container'>
      <div className='contactimg'>
        <h1 className="contact-us">Contact US</h1>
        <hr className="hr-or" />
        <hr className="hr-or" />
        <div className="float-container">
          <div className="float-child">
            <i className="fas fa-map-marker-alt fa-2xl"></i>
            <div className="topic">Address</div>
            <div className="text-one">Karna Highschool,Near Mouli Lawns,</div>
            <div className="text-two"> D.G.P Nagar -2,Murari Nagar,Pune</div>
            <div className="text-two"> Maharashtra 410014</div>
          </div>
          <div className="float-child">
            <i className="fas fa-phone-alt fa-2xl"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+91 9876543210</div>
            <div className="text-two">+91 7030253147</div>
          </div>
          <div className="float-child">
            <i className="fas fa-envelope fa-2xl"></i>
            <div className="topic">Email</div>
            <div className="text-one">karnaenglishschool@gmail.com</div>
            
          </div>
        </div>
      </div>
    </div>

  )
}
