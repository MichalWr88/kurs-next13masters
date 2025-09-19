"use client";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import type { UrlObject } from "url";
interface Props<T extends string> extends Omit<LinkProps<string>, "href"> {
	exact?: boolean;
	href: Route<T> | UrlObject;
	children: React.ReactNode;
}

const getIsActive = <T extends string>({
	href,
	routePath,
	exact,
}: {
	href: Route<T> | UrlObject;
	exact: boolean;
	routePath: string;
}): boolean => {

	if (typeof href === "string") {
		return exact || href.length === 1
			? href === routePath
			: Boolean(routePath.match(new RegExp(`^${href}`, "g")));
	}
	if ("pathname" in href && href.pathname) {
		return exact ? href.pathname === routePath : routePath.includes(href.pathname);
	}
	console.error("invalid href type");
	return false;
};

const ActiveLink = <T extends string>({
	href,
	children,
	exact = false,
	...linkProps
}: Props<T>) => {
	const routePath = usePathname();
	const isActive = getIsActive({ href, exact, routePath })
	return (
		<Link
			{...linkProps}
			href={href}
			aria-current={isActive ? "page" : undefined}
			className={`mx-2 flex basis-60  justify-around px-2  py-1 uppercase hover:bg-brand-color-4 ${
				isActive ? "border-b-4 border-brand-color-2" : ""
			}`}
		>
			{children}
		</Link>
	);
};

export default ActiveLink;

