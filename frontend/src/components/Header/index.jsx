import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
	const [activePage, setActivePage] = useState('stuff')
	
	return (
		<header>
			<nav>
				<Link to="/part-one/all-stuff" className="nav-link">Vendre mes Objets</Link>
				<div className="middle">
					<Link to="/part-one/all-stuff" onClick={() => setActivePage('stuff')} className={activePage == 'stuff' ? 'nav-link selected' : 'nav-link'} >Objet a vendre</Link>
					<Link to="/part-one/new-thing" onClick={() => setActivePage('sell')} className={activePage == 'sell' ? 'nav-link selected' : 'nav-link'}>Vendre un objet</Link>
				</div>
				<Link to="/" className="nav-link">Retour à l'index</Link>
			</nav>
		</header>
	)
}

export default Header;