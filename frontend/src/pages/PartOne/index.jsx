import React, { useState } from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import AllStuff from '../AllStuff';
import NewThing from '../NewThing';


const PartOne = () => {
	
	const { path } = useRouteMatch();
	const [selectedPage, setSelectedPage] = useState(true)
	
	return (
		<div className="part-one">
			<Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<Switch>
				<Route path={`${path}/all-stuff`}>
					<AllStuff />
				</Route>
				<Route path={`${path}/new-thing`}>
					<NewThing />
				</Route>
			</Switch>
			
		</div>
	)
}

export default PartOne;