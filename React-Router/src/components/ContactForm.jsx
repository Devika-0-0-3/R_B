import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='Name'></input>
        <br/>
        <input type='email' placeholder='Email'/>
        <br/>
        <textarea placeholder='Message'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
