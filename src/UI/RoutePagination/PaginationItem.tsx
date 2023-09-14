"use client";
import clsx from "clsx";
import Link from "next/link";
import type {  Route } from "next";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	href: Route;
	blocked?: boolean;
	selected?: boolean;

};

const PaginationItem = ({ children, href, blocked,selected }: Props) => {
	console.log("render");
	return (
		<li className={clsx("mx-2 bg-brand-color-3 px-4 text-lg text-brand-font-color rounded-xl flex items-center w-14 justify-center",selected && "font-bold bg-brand-color-2")}>
			{!blocked ? <Link href={href}>{children}</Link> : children}
		</li>
	);
};

export default PaginationItem;
