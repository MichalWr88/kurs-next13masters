import { type Route } from "next";
import Image from "next/image";
import { executeGraphql } from "@/api/graphQL/graphQLProvider";
import { CollectionsGetListDocument } from "@/gql/graphql";
import ProductList from "../ProductList/ProductList";
import AppLink from "../Shared/AppLink";

const CollectionsList = async () => {
	const collectionResp = await executeGraphql({ query: CollectionsGetListDocument });

	if (!collectionResp.collections?.data || collectionResp.collections?.data?.length === 0) {
		return <div>not Found collections</div>;
	}

	return (
		<ProductList header="Collections" classString="lg:grid-cols-3">
			{collectionResp.collections?.data.map((collection) => {
				const attr = collection.attributes;
				return (
					<li key={`categories-${attr?.slug}`}>
						<AppLink route={`/collections/${attr?.slug}` as Route}>
							{attr?.image && (
								<Image
									className="relative h-max transition-all delay-100 duration-300 ease-in-out "
									quality={20}
									placeholder="blur" // "empty" | "blur"
									blurDataURL="/blur.png"
									data-testid="mePic"
									src={`${process.env.GRAPHQL_URL}${attr.image.data?.attributes?.url}` || ""}
									alt={attr.name}
									width={attr.image.data?.attributes?.width ?? 200}
									height={attr.image.data?.attributes?.height ?? 200}
									style={{ objectFit: "cover" }}
								/>
							)}
							<h3 className="text-lg font-medium text-gray-900">{collection.attributes?.name}</h3>
						</AppLink>
					</li>
				);
			})}
		</ProductList>
	);
};

export default CollectionsList;
