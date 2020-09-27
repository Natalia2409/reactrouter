import React, {Component} from 'react';
import Contacts from './components/contacts';
import './App.css';

export default class PhoneBook extends Component {
  render() {
    return (
      <div className="contacts">
        <h1>Контакти</h1>
        <Contacts/>
      </div>
    )
  }
}


