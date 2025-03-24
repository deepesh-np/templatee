import React from 'react'
import { useNavigate } from 'react-router'
// import ContactInfo from '../components/ContactInfo'
// import ContactForm from '../components/ContactForm'

const Contact = () => {

    const navigate = useNavigate()

  return (
    <div>
      <h1>Contact page</h1>

      <div className='contact-buttons' >
      <button
       onClick={() => navigate('info')}
      >
      Contact Info 
      </button>
      <button
       onClick={() => navigate('form')}>
        Contact Form
      </button>

    </div>
    </div>
  )
}

export default Contact
