import PropTypes from 'prop-types'
import React from 'react'
import { Contact } from '../../models/contact.class'
const ContactComponent = ({ contact, isConected, remove }) => {

    function Conected() {
        if (contact.isConected) {
            return (<i onClick={() => isConected(contact)} className="bi bi-circle-fill" style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => isConected(contact)} className="bi bi-circle-fill" style={{ color: 'grey' }}></i>)
        }
    }

    return (

        <tr className='fw-normal'>
            <td>
                <span className='ms-2'>{contact.name}</span>
            </td>
            <td>
                <span className='ms-2'>{contact.lastname}</span>
            </td>
            <td>
                <span className='ms-2'>{contact.email}</span>
            </td>
            <td>
                <span className='align-midle'>{Conected()}</span>
                <i className='bi-trash task-action' onClick={() => remove()} style={{ color: 'tomato' }}></i>

            </td>
        </tr>
    )
}
ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    isConected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent