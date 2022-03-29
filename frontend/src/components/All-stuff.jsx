import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

import './css/all-stuff.css';

const data = [
	{name: 'first stuff', price: 487, description: 'some random description', img:'../assets/images/lunch_1.jpg', _id: 1},
	{name: 'second stuff', price: 784, description: 'some random description for the seconde thing', img:'../assets/images/lunch_2.jpg', _id: 3},
	{name: 'third stuff', price: 485, description: 'some random description for the third thing', img:'../assets/images/lunch_3.jpg', _id: 2}
];


const Stuff = ({img, name, price}) => {
	return (
		<Link to='/singleThing' className="stuff">
			<img src={img} alt="img-thing"/>
			<div className="detail">
				<h3 className="stuff-name">{name}</h3>
				<h4 className="stuff-price">{price}</h4>
			</div>
		</Link>
	)
}


const Stuffs = () => {
	const [stuffs, setStuffs] = useState([])
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false)
	
	useEffect(() => {
		
		setStuffs(data);
		setLoading(false)
	}, [])
	
	if(error) {
		return (
			<div className="loader">Some error when fetching datas</div>
		)
	}
	
	if(loading) {
		return (
			<div className="loader">Loading...</div>
		)	
	}
	
	return (
		<div className="stuffs-container">
			{stuffs.map(thing => <Stuff key={thing._id} {...thing} />)}
		</div>
		
	)
}

const All_stuff = () => {
	return (
		<div className="all-stuff">
			<Header />
			<div className="banner">
				<h1>le meilleur endroit pour vendre vos objets</h1>
			</div>
			<Stuffs />
		</div>
	)
}

export default All_stuff;