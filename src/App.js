import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as contactsAPI from './utlis/ContactsAPI'

class App extends Component {
  state = {
  contacts: []
}
componentDidMount()
{
contactsAPI.getAll().then((AllContacts) => {
  console.log('all Contacts',AllContacts)
  this.setState({contacts:AllContacts})

})
}
  removeContact = (ContactPakdna) =>{
    console.log('contact jo peeche se aya',ContactPakdna)
    // this.state.contacts.map((item) =>{
    //   console.log('matching with map function',ContactPakdna.id === item.id)
    // })
    this.setState({
      contacts: this.state.contacts.filter((filtercontactitem) => {
        return filtercontactitem.id !== ContactPakdna.id
        })
    })

    contactsAPI.remove(ContactPakdna)
//     this.setState((state) => ({
//       contacts: state.contacts.filter((filtercontactitem) => {
// return filtercontactitem.id !== ContactPakdna.id
//       })
//     }))
  }
      
  render() {
      return (
        <div>
          <ListContacts mycontacts={this.state.contacts} onDelete={this.removeContact}/>
        </div>
      )
    }
  }
  export default App;
