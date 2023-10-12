import { ReviewCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphQLProvider";

export const addReviewToProduct = async ({
	content,
	email,
	headline,
	productId,
	rating,
	name,
}: {
	content: string;
	email: string;
	headline: string;
	name: string;
	productId: number;
	rating: number;
}) => {
	const resp = await executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			publishedAt: new Date().toISOString(),
			name,
			content,
			email,
			headline,
			product: productId.toString(),
			rating,
		},
	});
	return resp.createReview?.data;
};
