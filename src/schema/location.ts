import { z } from 'zod';

export const locationSchema = z.object({
	latitude: z.string().refine((value) => validateLatitude(value), {
		message: 'Invalid latitude'
	}),
	longitude: z.string().refine((value) => validateLongitude(value), {
		message: 'Invalid longitude'
	}),
	appIdToken: z.string().length(32, { message: 'Invalid app token id' })
});

const validateLatitude = (value: string) => {
	const regex = /^-?\d+(\.\d+)?\s[NS]$/;
	if (!regex.test(value)) return false;

	const [numberPart] = value.split(' ');
	const latitude = parseFloat(numberPart);

	return latitude >= -90 && latitude <= 90;
};

const validateLongitude = (value: string) => {
	const regex = /^-?\d+(\.\d+)?\s[WE]$/;
	if (!regex.test(value)) return false;

	const [numberPart] = value.split(' ');
	const longitude = parseFloat(numberPart);

	return longitude >= -180 && longitude <= 180;
};
