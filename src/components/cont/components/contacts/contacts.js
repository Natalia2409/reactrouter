import React, {Component} from 'react';
import './contacts.css';
import Contact from '../contact';
import Check from '../check';
import male from "../img/male-icon.jpg";
import female from "../img/female-icon.jpg";
import unknown from "../img/unknown.png";


const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}]



export default class Contacts extends Component {
    
    state = {
        contacts: [...contacts],
        search: '',
        checked: true
    }

    setGender(gender) {
        if (gender === 'male') {
            return <img src={male} alt="male"></img>;
        } else if (gender === 'female') {
            return <img src={female} alt="female"></img>;
        }
        else {
            return <img src={unknown} alt="unknown"></img>;
        }
    }

    handleSearchChange = (e)  => {
        this.setState({
            search: e.target.value
        })

        this.setState({
            contacts:  [...contacts.filter(contact => {
                return (
                    contact.lastName.toLowerCase().includes(e.target.value.toLowerCase()) 
                    || contact.firstName.toLowerCase().includes(e.target.value.toLowerCase()) 
                    || contact.phone.includes(e.target.value)
                )
            })]
        })
    }

    handleSexChange = (e) => {
        this.setState({
            checked: e.target.value
        })

        this.setState((checked) => ({
            checked: !checked
        }))
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.search} onChange={this.handleSearchChange} className="search-panel" type="text" placeholder="Пошук"/>
                </div>

                {this.state.contacts.map((contact, id) => 
                    <Contact
                        key = {id}
                        firstName = {contact.firstName}
                        lastName = {contact.lastName}
                        phone = {contact.phone}
                        gender = {this.setGender(contact.gender)}
                    />
                )}

                <Check 
                    onClick = {this.handleSexChange}
                />
            </div>
        )
    }
}