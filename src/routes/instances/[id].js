import { api } from './_api';


/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {

    const response = await api('get', `instances/${params.id}`);
    const instance = await response.json();

    if (instance) {
        return {
            body: { instance }
        };
    }

    return {
        status: 404
    };
}