import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/header.css';

const links_part_one = ["/part-one/all-stuff", "/part-one/new-thing", "/"]

const Header = () => {
	
	return (
		<header>
			<nav>
				<Link to="/part-one/all-stuff" className="nav-link">Vendre mes Objets</Link>
				<div className="middle">
					<Link to="/part-one/all-stuff" className="nav-link" >Objet a vendre</Link>
					<Link to="/part-one/new-thing" className="nav-link">Vendre un objet</Link>
				</div>
				<Link to="/" className="nav-link">Retour à l'index</Link>
			</nav>
		</header>
	)
}

export default Header;