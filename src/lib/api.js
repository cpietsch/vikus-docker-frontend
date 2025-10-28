export function api(method, resource, data, params) {
	// console.log(`${base}${resource}`);
	const serializedParams = params ? `?${new URLSearchParams(params).toString()}` : '';
	return fetch(`/api${resource}${serializedParams}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
