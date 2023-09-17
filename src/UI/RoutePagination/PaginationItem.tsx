"use client";
import clsx from "clsx";
import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	href: Route;
	blocked?: boolean;
	selected?: boolean;
};

const PaginationItem = ({ children, href, blocked, selected }: Props) => {
	console.log("render");
	return (
		<li
			className={clsx(
				"relative block rounded bg-transparent px-5  py-3 text-lg  transition-all duration-300 hover:bg-brand-color-4",
				selected && "font-bold bg-brand-font-color text-brand-color-2 ",
				blocked && "text-brand-color-4",
			)}
		>
			{!blocked ? <Link href={href}>{children}</Link> : children}
		</li>
	);
};

export default PaginationItem;
