import { headers } from "next/headers";
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
const NavBar = async () => {
	const headersList = headers();

	const fullUrl = headersList.get("referer") || "";

	console.log(fullUrl);
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
		<header className="bg-brand-color-3 sticky top-0">
			<div className="flex justify-center p-4">
				<nav className="container flex h-8">
					{navList.map((nav) => (
						<Link href={nav.path} key={`nav-${nav.path}`}>
							<LinkMenu label={nav.label} path={nav.path}/>
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
