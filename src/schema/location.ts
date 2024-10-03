import { z } from 'zod';

export const locationSchema = z.object({
	longitude: z.string().refine((value) => validateLongitude(value), {
		message:
			'Invalid longitude. Must be a number between -180 and 180 followed by a direction (N, S, E, W)'
	}),
	latitude: z.string().refine((value) => validateLatitude(value), {
		message:
			'Invalid latitude. Latitude must be a number between -90 and 90 followed by a direction (N, S, E, W)'
	}),
	appIdToken: z.string().length(32, { message: 'Invalid app token id' })
});

const validateLongitude = (value: string) => {
	const regex = /^-?\d+(\.\d+)?\s[NSEW]$/;
	if (!regex.test(value)) return false;

	const [numberPart] = value.split(' ');
	const longitude = parseFloat(numberPart);

	return longitude >= -180 && longitude <= 180;
};

const validateLatitude = (value: string) => {
	const regex = /^-?\d+(\.\d+)?\s[NSEW]$/;
	if (!regex.test(value)) return false;

	const [numberPart] = value.split(' ');
	const latitude = parseFloat(numberPart);

	return latitude >= -90 && latitude <= 90;
};
