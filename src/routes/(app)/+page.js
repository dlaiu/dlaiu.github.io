import { dataHandler } from '$lib/dataHandler.js';

export async function load({ fetch }) {
    const res = await fetch('/portfolio-items.csv');
    const text = await res.text();
    return dataHandler(text);
}
