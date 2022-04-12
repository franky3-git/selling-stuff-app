import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({selectedPage, setSelectedPage}) => {
	
	return (
		<header>
			<nav>
				<Link to="/part-one/all-stuff" className="nav-link">Vendre mes Objets</Link>
				<div className="middle">
					<Link to="/part-one/all-stuff" className={selectedPage === true ? "nav-link selected" : "nav-link"} onClick={() => setSelectedPage(!selectedPage)}>Objet a vendre</Link>
					<Link to="/part-one/new-thing" className={selectedPage === false ? "nav-link selected" : "nav-link"} onClick={() => setSelectedPage(!selectedPage)}>Vendre un objet</Link>
				</div>
				<Link to="/" className="nav-link">Retour à l'index</Link>
			</nav>
		</header>
	)
}

export default Header;