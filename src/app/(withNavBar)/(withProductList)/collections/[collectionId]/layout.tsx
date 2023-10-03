import { notFound } from "next/navigation";
import CollectionsHeader from "@/UI/Collections/CollectionsHeader";
import RoutePagination from "@/UI/RoutePagination/RoutePagination";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import {
	CollectionGetBySlugDocument,
	ProductsGetCountListByCollectionSlugDocument,
} from "@/gql/graphql";
import type { Route } from "next";

export const generateMetadata = async ({
	params: { collectionId },
}: {
	params: { collectionId: string };
}) => {
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
	params: { collectionId: string };
}) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const resp = await executeGraphql({
		query: ProductsGetCountListByCollectionSlugDocument,
		variables: {
			slug: params.collectionId,
		},
	});
	const collectionResp = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: params.collectionId,
		},
	});
	if (!resp.products) {
		throw notFound();
	}

	return (
		<>
			<CollectionsHeader collection={collectionResp.collections?.data[0]?.attributes} />
			{children}
			<RoutePagination
				basePath={`/collections/${params.collectionId}` as Route}
				currentPage={1}
				totalCount={resp.products?.meta.pagination.total ?? 0}
				pageSize={20}
			/>
		</>
	);
}
