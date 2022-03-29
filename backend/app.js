const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const stuffs = [
	{name: 'first stuff', price: 487, description: 'some random description', img:'../assets/images/lunch_1.jpg', _id: 1},
	{name: 'second stuff', price: 784, description: 'some random description for the seconde thing', img:'../assets/images/lunch_2.jpg', _id: 3},
	{name: 'third stuff', price: 485, description: 'some random description for the third thing', img:'../assets/images/lunch_3.jpg', _id: 2}
];

app.get('/', (req, res) => {
	res.status(200).json({status: 'success', data: 'my api works'})
})

app.get('/api/stuffs', (req, res) => {
	console.log('stuff')
	res.status(200).json({status: 'success', data: stuffs})
})

app.get('/api/stuffs/:id', (req, res) => {
	const {id} = req.params;
	const selectedThing = stuffs.find(thing => thing._id === id);
	if(!selectedThing) {
		res.status(404).json({status: 'failed', message: 'Product not found'})
	}
	res.status(200).json({status: 'success', data: selectedThing})
})

app.listen(4000, (err) => {
	console.log('Server is running on port 4000')
})











