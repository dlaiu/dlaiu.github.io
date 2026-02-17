async function fetchOgImage(url) {
	try {
		const res = await fetch(url, {
			headers: { 'User-Agent': 'Mozilla/5.0' }
		});
		const html = await res.text();
		const match =
			html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"/) ||
			html.match(/<meta[^>]*content="([^"]*)"[^>]*property="og:image"/);
			console.log('match', match);
		return match?.[1] || '';
	} catch {
		return '';
	}
}

export async function load() {
	const groceryImg = await fetchOgImage(
		'https://www.sfchronicle.com/projects/grocery-price-tracker/'
	);

	return {
		ogImages: {
			grocery: groceryImg
		}
	};
}
