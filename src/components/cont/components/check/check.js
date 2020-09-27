import React, {Component} from 'react';
import './check.css'

export default class Check extends Component {
    render() {
        return (
            <div className="check">
                <label>
                    <input type="checkbox" name="male" defaultChecked/>Male
                </label>
                    
                <label>
                    <input type="checkbox" name="female" defaultChecked/>Female
                </label>

                <label>
                    <input type="checkbox" name="n/a" defaultChecked/>N/A
                </label>
            </div>
        )
    }
}