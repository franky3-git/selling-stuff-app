import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Default from '../pages/Default';
import Error404 from '../pages/Error404';
import PartOne from '../pages/PartOne'


//import style
import './App.css';

function App() {
	return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Default />
					</Route>
					<Route path="/part-one">
						<PartOne />
					</Route>
					<Route>
						<Error404 />
					</Route>
				</Switch>
			</Router>
		)
}

export default App;









