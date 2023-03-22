import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class'

const ContactForm = ({ add }) => {

    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    function addContact(e) {
        e.preventDefault()
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            true
        )
        add(newContact)
    }

    return (

        <div className='container'>
        <h5 style={{color:'#000'}}>Add new Contact</h5>
            <form onSubmit={addContact}>
                <div className="mb-3">
                    <input ref={nameRef} id='inputName' type='text' placeholder='Contact Name' className="form-control" required autoFocus />
                </div>
                <div className="mb-3">
                    <input ref={lastNameRef} id='inputLastName' type='text' className='form-control' required placeholder='Last Name' />
                </div>
                <div className="mb-3">
                    <input ref={emailRef} id='inputEmail' type='text' className='form-control' required placeholder='Email' />
                </div>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    Add Contact
                </button>
            </form>
        </div>
    )
}
ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm