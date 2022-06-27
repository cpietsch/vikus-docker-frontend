export const protocoll = 'http';
export const domain = location.hostname;
export const port = 5000
export const portWeb = 8000;

export function api(method, resource, data, params) {
	// console.log(`${base}${resource}`);
	const serializedParams = params ? `?${new URLSearchParams(params).toString()}` : '';
	return fetch(`${protocoll}://${domain}:${port}${resource}${serializedParams}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
