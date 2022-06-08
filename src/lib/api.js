export const protocoll = 'http';
export const domain = location.hostname;
export const port = 5000

export function api(method, resource, data) {
	// console.log(`${base}${resource}`);
	return fetch(`${protocoll}://${domain}:${port}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
