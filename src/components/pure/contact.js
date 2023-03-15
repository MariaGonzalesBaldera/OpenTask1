import PropTypes from 'prop-types'
import React from 'react'
import { Contact } from '../../models/contact.class'
const ContactComponent = ({ contact }) => {

    return (
        <div>
            <h5>
                Nombre : {contact.name}
            </h5>
            <h5>
                Apellido : {contact.lastname}
            </h5>
            <h5>
                Correo : {contact.email}
            </h5>
            <h5>
                 {contact.isConected ? 'Contacto en linea':'Contacto no disponible'}
            </h5>
        </div>
    )
}
ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact)
}

export default ContactComponent