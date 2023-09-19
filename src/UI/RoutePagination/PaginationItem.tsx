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

const PaginationItem = ({ children, href, blocked, selected }: Props) => (
	<li className={clsx(blocked && "pointer-events-none")}>
		<Link
			href={href}
			className={clsx(
				"relative block rounded-2xl  px-3 mx-3 py-2 text-lg  transition-all duration-300 hover:bg-brand-color-4",
				selected && "bg-brand-color-2 font-bold text-brand-font-color",
				blocked && "text-brand-color-4",
			)}
		>
			{children}
		</Link>
	</li>
);

export default PaginationItem;
