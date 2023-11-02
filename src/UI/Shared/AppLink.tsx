"use client";
import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";

import React, { type ReactNode } from "react";

type Props<T extends string> = {
	children: ReactNode;
	route: Route<T>;
	hover?: boolean;
};

const AppLink = <T extends string>({ children, route, hover }: Props<T>) => (
	<Link
		className={clsx(
			"relative  flex flex-col items-center justify-center",
			hover && "hover:font-bold",
		)}
		href={route}
	>
		{children}
	</Link>
);

export default AppLink;
