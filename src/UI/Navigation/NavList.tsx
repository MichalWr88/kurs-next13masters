import ActiveLink from "./ActiveLink";
import type { Route } from "next";
import type { UrlObject } from "url";
type NavElem = {
	id: number;
	path: UrlObject | Route<string>;
	label: string;
};

const staticLink: Array<NavElem> = [
	{
		id: 1,
		path: "/",
		label: "Home",
	},
	{
		id: 1,
		path: "/products",
		label: "All",
	},
	{
		id: -1,
		path: "/about",
		label: "About",
	},
];
const NavList = async () => {
	const categories = await fetch("https://fakestoreapi.com/products/categories")
		.then((res) => res.json())
		.then((json: Array<string>) => json);

	const navList: Array<NavElem> = [
		...staticLink,
		...categories.map(
			(cat, index): NavElem => ({
				id: Number(`0.${index}`),
				path: `/categories/${encodeURI(cat)}` as Route<string>,
				label: cat,
			}),
		),
	].sort((a, b) => b.id - a.id);
	return (
		<>
			{navList.map((nav) => (
				<ActiveLink key={`nav-${encodeURI(nav.label)}`} href={nav.path}>
					{nav.label}
				</ActiveLink>
			))}
		</>
	);
};

export default NavList;
