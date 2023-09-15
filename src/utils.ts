/* eslint-disable arrow-body-style */

export const prodOnly = <T>(callback: Promise<T>, returnData: T): Promise<T> => {
	return process.env.NODE_ENV === "production" ? callback : Promise.resolve(returnData);
};
