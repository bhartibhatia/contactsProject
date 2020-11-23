import React, { Component, useState } from 'react'
import escapeStringRegexp from 'escape-string-regexp'
import sortBy from 'sort-by'

// function ListContacts(props)
// {
// const [StateKaNam,setStateKaNam]=useState('')
// const changeInputValue = (padkdleaValue) => {
//     console.log('pakadleaValueoutput',padkdleaValue.target.value)
//     setStateKaNam(padkdleaValue.target.value)
//  }
//     return (
// <div className='list-contacts'>
//     <input
//     className='search-contacts' placeholder={'Search Contacts'} type={'text'} value={StateKaNam} onChange={changeInputValue} ></input>
// <ol className='contact-list'>
//             {props.mycontacts.map((item) => {
//                 console.log('myitem', item)
//                 return (
//                     <li key={item.id} className="contact-list-item">
//                         <div className='contact-avatar'
//                             style={{
//                                 backgroundImage: `url(${item.avatarURL})`
//                             }} />
//                         <div className='contact-details'>
//                             <p>{item.name}</p>
//                             <p>{item.email}</p>
//                         </div>
//                         <button  onClick={() => {
//                             props.onDelete(item)
//                         }} className='contact-remove'></button>
//                     </li>
//                 )
//             })}
//         </ol>
// </div>

//     )
// }
class ListContacts extends Component {
 
    
    state = {
        stateKaNam: ''
    }
    resetMyState = () => {
this.setState({stateKaNam:''})
    }
    changeInputValue = (padkdleaValue) => {
        console.log('pakadleaValueoutput', padkdleaValue.target.value)
        // setStateKaNam(padkdleaValue.target.value)
        this.setState({
            stateKaNam: padkdleaValue.target.value
        })
    }

    render() {
        const {mycontacts,onDelete}=this.props
        const {stateKaNam}=this.state
        let showingContacts

        if (stateKaNam) {
            const match = new RegExp(escapeStringRegexp(stateKaNam), 'i')
            showingContacts = mycontacts.filter((item) => {
                return match.test(item.name)

            })
        } else {
            showingContacts = mycontacts
}
        showingContacts.sort(sortBy('name'))

        console.log('props', this.props)
        return (
            <div className='list-contacts'>
                <input
                    className='search-contacts' placeholder={'Search Contacts'} type={'text'} value={this.state.StateKaNam} onChange={this.changeInputValue} ></input>


                {showingContacts.length !== mycontacts.length &&(
                <div className='showing-contacts'>
                    <span>Now Showing {showingContacts.length} of {mycontacts.length} total</span>
             <button onClick={this.resetMyState}>Show All</button>
                </div>
                )}
                <ol className='contact-list'>
                    {showingContacts.map((item) => {
                        console.log('myitem', item)
                        return (
                            <li key={item.id} className="contact-list-item">
                                <div className='contact-avatar'
                                    style={{
                                        backgroundImage: `url(${item.avatarURL})`
                                    }} />
                                <div className='contact-details'>
                                    <p>{item.name}</p>
                                    <p>{item.email}</p>
                                </div>
                                <button className='contact-remove'
                                    onClick={() => {
                                        onDelete(item)
                                    }}></button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}
export default ListContacts; 