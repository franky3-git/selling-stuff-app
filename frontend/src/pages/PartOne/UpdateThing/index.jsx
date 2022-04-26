import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './updatething.css';

const url = 'http://localhost:3000/api/things'

const UpdateThing = () => {
	
	const {id} = useParams();
	
	const [formValues, setFormValues] = useState({title: '', price: '', description:'', url:''})
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log(formValues);
		axios.put(`${url}/${id}`, {...formValues})
		.then(response => console.log(response.data))
		.catch(err => console.log(err.response))
		
		setFormValues({title: '', price: '', description:'', url:''})
	}
	
	return (
		<div className="all-stuff">
			<div className="add-thing">
				<form action="" className="add-thing-form">
					<div className="form-group">
						<label htmlFor="title">Titre</label>
						<input type="text" name="title" id="title" placeholder="Que vendez vous?" value={formValues.title} onChange={(e) => {setFormValues({...formValues, [e.target.name]: e.target.value})}} />
					</div>
					<div className="form-group">
						<label htmlFor="price">Prix (en FCFA)</label>
						<input type="number" name="price" id="price" placeholder="0" value={formValues.price} onChange={(e) => {setFormValues({...formValues, [e.target.name]: e.target.value})}}/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea name="description" id="description" cols="30" rows="10" placeholder="Décrivez votre objet (type, qualité, etc..)" value={formValues.description} onChange={(e) => {setFormValues({...formValues, [e.target.name]: e.target.value})}}>
							
						</textarea>
					</div>
					<div className="form-group">
						<label htmlFor="url">URL de l'image</label>
						<input type="text" name="url" id="url" placeholder="http://..." value={formValues.url} onChange={(e) => {setFormValues({...formValues, [e.target.name]: e.target.value})}} />
					</div>
					<input type="submit" value="valider" className="btn-add-thing"/>
				</form>
			</div>
		</div>
	)
}

export default UpdateThing;