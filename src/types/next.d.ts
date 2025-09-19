declare module "next/types" {
	import type { NextPage } from "next";

	export type PageProps = {
		params?: Record<string, string>;
		searchParams?: Record<string, string | string[]>;
	};

	export type NextPageWithProps<P = {}, IP = P> = NextPage<P & PageProps, IP>;
}
