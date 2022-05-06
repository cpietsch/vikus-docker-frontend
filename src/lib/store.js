import { writable } from "svelte/store";
// export const ssr = false;

// export const cache = writable(stored);
// cache.subscribe((value) => (localStorage.cache = JSON.stringify(value)));
export async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time || 1000);
  });
}

export const json = async function (_url) {
  // if (cache[url]) {
  //   await sleep(50);
  //   return cache[url];
  // }
  // console.log("fetching", _url);
  const url = `http://localhost:5000/cache?url=${_url}`;
  const response = await fetch(url).then((response) => response.json());
  // cache[url] = response;
  //   if (localStorage) localStorage.cache = JSON.stringify(cache);
  return response;
};


export const counter = writable(0);
export const nodes = writable([]);
export const jsons = writable([]);

export const stratified = writable(null);
export const selected = writable([]);