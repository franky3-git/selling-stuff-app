import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import useFetch from '../../../useFetch';

import './singleThing.css';

const url = 'http://localhost:5000/api/things'

const Thing = ({id}) => {
	const [thing, setThing] = useState({})
	
	const [stuffs, loading, error, errorMessage] = useFetch(`${url}/${id}`);
	
	useEffect(() => {
		setThing(stuffs)
	})
	
	if(loading) {
		return (
			<div className="loader"></div>
		)
	}
	
	if(error) {
		return <div className="error all">{errorMessage}</div>
	}
	
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
	
	const {id} = useParams();
	
	const deleteThing = (id) => {
		console.log("working")
		axios.delete(`http://localhost:5000/api/things/${id}`)
		.then(response => console.log(response.data))
		.catch(err => console.log(err.response))
	}
	
	return (
		<div className="singleThing">
			<Thing id={id} />
			<div className="btns">
				<Link to={`/part-one/update-thing/${id}`} className="btn btn-update">modifier</Link>
				<button onClick={() => deleteThing(id)} className="btn btn-delete">supprimer</button>
			</div>
		</div>
	)
}

export default SingleThing;

