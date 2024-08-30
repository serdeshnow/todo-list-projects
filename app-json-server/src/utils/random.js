export const getRandomLoad = () => {
	const random = Math.floor(Math.random() * 1000);
	console.log("Random load:", random);
	return random;
};
