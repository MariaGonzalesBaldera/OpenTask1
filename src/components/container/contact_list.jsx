import React, { useState } from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'
import ContactForm from '../pure/form/contactForm'

const ContactListComponent = ({ contact }) => {
  const Contact1 = new Contact('Maria', 'Gonzales', 'maria@gmail.com', false)
  const Contact2 = new Contact('Cristina', 'Baldera', 'mc@gmail.com', true)

  const [contacts, setContacts] = useState([Contact1,Contact2])

  function addContact(contact){
    const index = contacts.indexOf(contacts)
    const tempContact = [...contacts]
    tempContact.push(contact)
    setContacts(tempContact)
  }

  function conected(contact){
    const index = contacts.indexOf(contact)
    const tempContact =[...contacts]
    tempContact[index].isConected=!tempContact[index].isConected
    setContacts(tempContact)
  }

  function removeTask(contact){
    const index = contacts.indexOf(contact)
    const tempContact =[...contacts]
    tempContact.splice(index,1)
    setContacts(tempContact)
  }

  return (
    <div className='card'>
    <div className='card-body' style={{ position: 'relative', height: '30em' }}>
    <table className="table caption-top" style={{border: '0.5px solid '}}>
      <caption>List of Contacts</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>

          {contacts.map((contact, index) => {
            return (
              <ContactComponent 
              key={index} 
              contact={contact} 
              isConected={conected}
              remove={removeTask}
              >
              </ContactComponent>
            )
          })}
        </tbody>

      </table>
      <ContactForm add={addContact}>

    </ContactForm>
    </div>
    
    </div>
  )
}

export default ContactListComponent