export const convertLongitudeToDecimal = (longitude: string) => {
	const [numberPart, direction] = longitude.split(' ');
	const longitudeNumber = parseFloat(numberPart);

	return direction === 'W' ? longitudeNumber * -1 : longitudeNumber;
};

export const convertLatitudeToDecimal = (latitude: string) => {
	const [numberPart, direction] = latitude.split(' ');
	const latitudeNumber = parseFloat(numberPart);

	return direction === 'S' ? latitudeNumber * -1 : latitudeNumber;
};
