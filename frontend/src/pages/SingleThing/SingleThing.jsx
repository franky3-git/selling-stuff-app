import React, { useState } from 'react';


const SingleThing = () => {
	const [thing, setThing] = useState({name: 'first stuff', price: 487, description: 'some random description', img:'../assets/images/lunch_1.jpg', _id: 1})
	
	return (
		<div className="singleThing">
			
		</div>
	)
}

export default SingleThing;

