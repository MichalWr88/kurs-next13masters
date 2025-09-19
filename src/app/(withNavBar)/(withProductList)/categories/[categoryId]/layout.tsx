import { getCategoriesList } from "@/api/graphQL/graphQLProvider";

export const generateStaticParams = async () => {
	const categories = await getCategoriesList();

	return categories
		.filter((category) => category.attributes?.slug)
		.map((category) => ({
			categoryId: category.attributes?.slug,
		}));
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
	params: Promise<{ categoryId: string }>;
}) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument

	return <>{children}</>;
}
