import { z } from 'zod';

export const locationSchema = z.object({
	longitude: z.string(),
	latitude: z.string(),
	appIdToken: z.string()
});
