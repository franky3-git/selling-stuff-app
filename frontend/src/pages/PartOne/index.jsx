import React, { useState } from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import AllStuff from './AllStuff';
import NewThing from './NewThing';
import SingleThing from './SingleThing';
import UpdateThing from './UpdateThing';
import Error404 from '../Error404';


const PartOne = () => {
	
	const { path } = useRouteMatch();
	
	return (
		<div className="part-one">
			<Header />
			<Switch>
				<Route exact path={`${path}/all-stuff`}>
					<AllStuff />
				</Route>
				<Route exact path={`${path}/new-thing`}>
					<NewThing />
				</Route>
				<Route exact path={`${path}/single-thing/:id`}>
					<SingleThing />
				</Route>
				<Route exact path={`${path}/update-thing/:id`}>
					<UpdateThing />
				</Route>
				<Route >
					<Error404 />
				</Route>
			</Switch>
		</div>
	)
}

export default PartOne;