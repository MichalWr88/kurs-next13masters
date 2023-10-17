"use client";
import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";

import React, { type ReactNode } from "react";

type Props<T extends string> = {
	children: ReactNode;
	route: Route<T>;
};

const AppLink = <T extends string>({ children, route }: Props<T>) => (
	<Link className={clsx("relative hover:font-bold flex flex-col justify-center items-center")} href={route} >
		{children}
	</Link>
);

export default AppLink;
