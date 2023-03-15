import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

const ContactListComponent =()=> {
    const defaultContact = new Contact('Maria','Gonzales','maria@gmail.com',false)
    
    return (
      <div>This Contact
      <ContactComponent contact={defaultContact} >
      </ContactComponent>
      </div>
    )
}

export default ContactListComponent