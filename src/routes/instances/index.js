import { api } from './_api';

export const get = async ({ locals }) => {
	const response = await api('get', `instances`);

	if (response.status === 200) {
		return {
			body: {
				instances: await response.json()
			}
		};
	}

	return {
		status: response.status
	};
};

export const post = async ({ request, locals }) => {
	const form = await request.formData();

	const response = await api('post', `instances?iiif_url=${form.get('url')}`);

	const instance = await response.json();

	return {
		status: 303,
		headers: {
			location: `/instances/${instance.id}`
		}
	};
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
const redirect = {
	status: 303,
	headers: {
		location: '/todos'
	}
};

export const patch = async ({ request, locals }) => {
	const form = await request.formData();

	await api('patch', `todos/${locals.userid}/${form.get('uid')}`, {
		text: form.has('text') ? form.get('text') : undefined,
		done: form.has('done') ? !!form.get('done') : undefined
	});

	return redirect;
};

export const del = async ({ request, locals }) => {
	const form = await request.formData();

	await api('delete', `todos/${locals.userid}/${form.get('uid')}`);

	return redirect;
};
