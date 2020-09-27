import React from 'react';
import Header from '../header/header';
import Text from '../text';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Posts from '../posts/App';
import Images from '../images/images';
import PhoneBook from '../cont/App';

const App = () => {
    return (
        <Router> 
            <Header/>
            <Switch>
                <Route path='/posts' component={Posts}/>
                <Route path='/images' component={Images}/>
                <Route path='/contacts' component={PhoneBook}/>
                <Route path="/" component={Text} />
                <Route exact path="/">
                    <Redirect to="/homepage" />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;