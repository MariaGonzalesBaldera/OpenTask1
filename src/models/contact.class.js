export class Contact {
    name = ''
    lastname = ''
    email = ''
    isConected = false
    constructor(name, lastname, email, isConected) {
        this.name = name
        this.lastname = lastname
        this.email = email
        this.isConected = isConected
    }
}