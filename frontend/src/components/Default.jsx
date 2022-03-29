import React from 'react';
import { Link } from 'react-router-dom';

import './css/default.css';

const Default = () => {
	return (
		<div className="default-page">
			<Link to="/part-one/all-stuff" className="part">part one</Link>
			<Link to="/part-two" className="part">part two</Link>
			<Link to="/part-three" className="part">part three</Link>
		</div>
	)
}

export default Default;