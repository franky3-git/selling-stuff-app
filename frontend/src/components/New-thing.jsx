import React from 'react';
import Header from './Header';

import './css/new-thing.css';

const All_stuff = () => {
	return (
		<div className="all-stuff">
			<Header />
			<div className="add-thing">
				<form action="" className="add-thing-form">
					<div class="form-group">
						<label htmlFor="title">Titre</label>
						<input type="text" name="title" id="title" placeholder="Que vendez vous?" />
					</div>
					<div class="form-group">
						<label htmlFor="price">Prix (en FCFA)</label>
						<input type="number" name="price" id="price" placeholder="0"/>
					</div>
					<div class="form-group">
						<label htmlFor="description">Description</label>
						<textarea name="description" id="description" cols="30" rows="10" placeholder="Décrivez votre objet (type, qualité, etc..)">
							
						</textarea>
					</div>
					<div class="form-group">
						<label htmlFor="url">URL de l'image</label>
						<input type="text" name="url" id="url" placeholder="http://..."/>
					</div>
					<input type="submit" value="valider" className="btn-add-thing"/>
				</form>
			</div>
		</div>
	)
}

export default All_stuff;