import Link from "next/link";
import LinkMenu from "./LinkMenu";

type NavElem = {
	id: number;
	path: string;
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
		label: "Products",
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
		...categories.map((cat, index) => ({
			id: Number(`0.${index}`),
			path: encodeURI(cat),
			label: cat,
		})),
	].sort((a, b) => b.id - a.id);
	return (
		<>
			{navList.map((nav) => (
				<Link href={nav.path} key={`nav-${nav.path}`}>
					<LinkMenu label={nav.label} path={nav.path} />
				</Link>
			))}
		</>
	);
};

export default NavList;
