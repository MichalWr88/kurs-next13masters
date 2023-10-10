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
	index?: number;
};

const PaginationItem = ({ children, href, blocked, selected, index }: Props) => (
	<li className={clsx(blocked && "pointer-events-none")} aria-label={`pagination/${index}`}>
		<Link
			href={href}
			className={clsx(
				"relative mx-3 block  rounded-2xl px-3 py-2 text-lg  transition-all duration-300 hover:bg-brand-color-4",
				selected && "bg-brand-color-3 font-bold text-brand-color-4",
				blocked && "text-brand-color-4",
			)}
		>
			{children}
		</Link>
	</li>
);

export default PaginationItem;
