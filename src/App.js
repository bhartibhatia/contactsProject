import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
  contacts: [
    {
      "id": "ryan",
      "name": "Ryan Florence",
      "email": "ryan@reacttraining.com",
      "avatarURL": "http://localhost:5001/ryan.jpg"
    },
    {
      "id": "michael",
      "name": "Michael Jackson",
      "email": "michael@reacttraining.com",
      "avatarURL": "http://localhost:5001/michael.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "email": "tyler@reacttraining.com",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
  ]
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
