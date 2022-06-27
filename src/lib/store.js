import { writable } from "svelte/store";
import { api } from "./api";

export const apiPaths = writable();

async function loadApi() {
  const response = await api('GET', '/openapi.json');
  const openapi = await response.json();
  console.log('openapi', openapi);
  const paths = Object.entries(openapi.paths)
    .filter(([path, _]) => path.startsWith('/instances/steps/'))
    .filter(([path, _]) => (path !== "/instances/steps/zip"))
    .map(([path, { post }]) => ({
      path,
      method: 'POST',
      description: post.description,
      parameters: post.parameters,
      name: post.summary,
      id: post.operationId,
    }))
  console.log('paths', paths);
  apiPaths.set(paths);
}
loadApi();