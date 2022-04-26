import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../useFetch';
import Loading from '../../../components/Loading';
import axios from 'axios'

import './allStuff.css';

const url = 'http://localhost:5000/api/things';


const Stuff = ({img, name, price}) => {
	return (
		<Link to='/part-one/single-thing/:id' className="stuff">
			<img src={img} alt="img-thing"/>
			<div className="detail">
				<h3 className="stuff-name">{name}</h3>
				<h4 className="stuff-price">{price}</h4>
			</div>
		</Link>
	)
}


const Stuffs = () => {
	const [stuffs, loading, error, errorMessage] = useFetch()
	
	if(loading) {
		return (
			<Loading />
		)	
	}
	
	if(error) {
		return (
			<div className="error">
				<p>Some error when fetching datas</p>
				<p>{errorMessage}</p>
			</div>
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
			<div className="banner">
				<h1>le meilleur endroit pour vendre vos objets</h1>
			</div>
			<Stuffs />
		</div>
	)
}

export default All_stuff;