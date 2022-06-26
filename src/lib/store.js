import { writable } from "svelte/store";

export async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time || 1000);
  });
}

export const counter = writable(0);
