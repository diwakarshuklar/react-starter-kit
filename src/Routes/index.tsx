import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Provider } from 'react-redux';
import Login from 'Pages/Login';
import SignUp from 'Pages/SignUp';
import createStore from 'Redux/store';
import TodoList from 'Pages/TodoList';


const Routes = () => {
    return (
        <Provider store={createStore}>
            <Router>
                <Switch>
                    <Route path="/todos">
                        <TodoList />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>

                </Switch>
            </Router>
        </Provider>
    );
};

export default Routes;