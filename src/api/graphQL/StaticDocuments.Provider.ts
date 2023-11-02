import { StaticDocumentsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphQLProvider";

export const getStaticDocumentsList = async () => {
	const resp = await executeGraphql({
		query: StaticDocumentsGetListDocument,
	});
	return resp.staticDocuments?.data;
};
