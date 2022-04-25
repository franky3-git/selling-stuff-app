import axios from 'axios';
import React, {useState, useEffect} from 'react';

const useFetch = function (url) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [stuffs, setStuffs] = useState([]);
	
	const getStuffs = async (url) => {
		try {
			const response = await axios.get(url);
			setStuffs(response.data)
			setLoading(false)
		} catch(err) {
			console.log(err)
			setError(true)
			setErrorMessage('cannot fetch stuffs')
			setLoading(false)
		}
		
	}
	
	useEffect(() => {
		getStuffs(url)
	}, [])
	
	return [stuffs, loading, error, errorMessage]
}


export default useFetch;
