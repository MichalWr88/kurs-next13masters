import Link from "next/link";
import { headers } from "next/headers";


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
		...categories.map((cat, index) => {
			return {
				id: Number(`0.${index}`),
				path: encodeURI(cat),
				label: cat,
			};
		}),
	].sort((a, b) => b.id - a.id);

	return (
		<header className="sticky top-0 bg-slate-400">
			<div className="flex justify-center p-4">
				<nav className="container flex h-8">
					{navList.map((nav) => {
						return (
							<Link href={nav.path} key={`nav-${nav.path}`}>
								<div
									className={`flex basis-60 justify-around rounded-md  border p-2 hover:bg-yellow-700 ${
										fullUrl.includes(nav.label.toLowerCase()) ? "bg-red-500" : ""
									}`}
								>
									{nav.label}
								</div>
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
