/* eslint-disable arrow-body-style */

export const prodOnly = <T extends unknown[]>(callback: Promise<T>): Promise<T | never[]> => {
	return process.env.NODE_ENV === "production" ? callback : Promise.resolve([]);
};

// type ReturnPromiseType2<T extends (...args: unknown[]) => Promise<unknown>> = T extends (
// 	...args: unknown[]
// ) => Promise<infer R>
// 	? R
// 	: Promise<unknown>;

// type ReturnType<T> = T extends (...args: unknown[]) => Promise<infer R>
// 	? Promise<R>
// 	: Promise<unknown>;

// type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T;

// export const generateMetadata = prodOnly(async () => {});

// export const prodOnly =
// 	// eslint-disable-next-line no-unused-vars

// 		<TParams extends unknown[], TReturn>(func: (...args: TParams) => TReturn) =>
// 		(...args: TParams) =>
// 			process.env.NODE_ENV === "production" ? func(...args) : Promise.resolve([]);

// export const botAsyncHandler =
// 	<T, Tresp>(fn: (msg: T) => Promise<Tresp>) =>
// 	async (msg: T): Promise<Tresp> =>
// 		fn(msg);

// const cacheResource =
// 	async <F extends (...args: unknown[]) => Promise<unknown>>(callback: F): Promise<PromiseReturnType<F>> =>
// 	async (...args: Parameters<F>): Promise<PromiseReturnType<F>> => {
// 		// if (cachedData) {
// 		//     return cachedData as ReturnType<F>; // assertion required because my cache returns unknown.
// 		// }callback(...args)
// 		return  callback(...args) as Promise<PromiseReturnType<F>>;
// 	};
