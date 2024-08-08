import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create({
		baseURL: baseURL,
		options,
	});
	return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
// development : create('http://localhost:5000/posts/');
// production : create('http://localhost:5000/posts/');
