import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Default from './Default';
import PartOneAllStuff from './All-stuff';
import PartOneNewThing from './New-thing';

import Error404 from './Error404';


//import style
import './css/App.css';

function App() {
	return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Default />
					</Route>
					<Route path="/part-one/all-stuff">
						<PartOneAllStuff />
					</Route>
					<Route path="/part-one/new-thing">
						<PartOneNewThing />
					</Route>
					<Route path="*">
						<Error404 />
					</Route>
				</Switch>	
			</Router>
		)
}

export default App;









