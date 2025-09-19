import { notFound } from "next/navigation";
import CollectionsHeader from "@/UI/Collections/CollectionsHeader";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import {
	CollectionGetBySlugDocument,
	ProductsGetCountListByCollectionSlugDocument,
} from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ collectionId: string }>;
}) => {
	const { collectionId } = await params;
	const collectionResp = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: collectionId,
		},
	});
	return {
		title: collectionResp.collections?.data[0]?.attributes?.name,
		description: collectionResp.collections?.data[0]?.attributes?.description,
	};
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ collectionId: string }>;
}) {
	const { collectionId } = await params;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const resp = await executeGraphql({
		query: ProductsGetCountListByCollectionSlugDocument,
		variables: {
			slug: collectionId,
		},
	});
	const collectionResp = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: collectionId,
		},
	});
	if (!resp.products) {
		throw notFound();
	}

	return (
		<>
			<CollectionsHeader collection={collectionResp.collections?.data[0]?.attributes} />
			{children}
		</>
	);
}
