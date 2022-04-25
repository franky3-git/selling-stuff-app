import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './singleThing.css';

const Thing = () => {
	const [thing, setThing] = useState({name: 'first stuff', price: 487, description: 'some random description', img:'../assets/images/lunch_1.jpg', _id: 1})
	
	return (
		<div className="thing" id={`thing-${thing._id}`}>
			<img src={thing.img} alt="image"/>
			<div class="details">
				<p>{thing.name}</p>
				<p className="price">{thing.price}</p>
			</div>
			<p>{thing.description}</p>
		</div>
	)
}

const SingleThing = () => {
	
	return (
		<div className="singleThing">
			<Thing />
			<div className="btns">
				<Link to='/part-one/update-thing' className="btn btn-update">modifier</Link>
				<Link className="btn btn-delete">supprimer</Link>
			</div>
		</div>
	)
}

export default SingleThing;

