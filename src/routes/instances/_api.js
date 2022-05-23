/*
	This module is used by the /todos endpoint to
	make calls to api.svelte.dev, which stores todos
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /todos/_api
	will net you a 404 response.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

export const protocoll = 'http';
export const domain = 'localhost:5000';

export function api(method, resource, data) {
	// console.log(`${base}${resource}`);
	return fetch(`${protocoll}://${domain}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
