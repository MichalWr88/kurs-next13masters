import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { CategoriesGetListDocument } from "@/gql/graphql";
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
		label: "shop",
	},
	{
		id: 1,
		path: "/productsssad",
		label: "blog",
	},
	{
		id: 1,
		path: "/productsssad",
		label: "Test",
	},
	{
		id: -1,
		path: "/about",
		label: "About",
	},
	{
		id: -1,
		path: "/about",
		label: "contacts",
	},
];
const NavList = async () => {
	const resp = await executeGraphql(CategoriesGetListDocument, {});
	const categories = resp.categories?.data;
console.log(resp)
	const navList: Array<NavElem> = [
		...staticLink,
		...(categories?.map(
			(cat, index): NavElem => ({
				id: Number(`0.${index}`),
				path: `/categories/${encodeURI(cat.attributes?.slug ?? "")}` as Route<string>,
				label: cat.attributes?.name ?? "",
			}),
		) ?? []),
	];
	return (
		<>
			{navList.map((nav) => (
				<li key={`nav-${encodeURI(nav.label)}`}>
					<ActiveLink href={nav.path}>{nav.label}</ActiveLink>
				</li>
			))}
		</>
	);
};

export default NavList;
