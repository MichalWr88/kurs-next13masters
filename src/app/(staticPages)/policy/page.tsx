import { notFound } from "next/navigation";
import MDXComponent from "@/UI/MDX/MDXComponent";
import { getStaticDocumentsList } from "@/api/graphQL/StaticDocuments.Provider";

const PlicyPage = async () => {
	const docList = await getStaticDocumentsList();
	const staticDoc = docList?.find((doc) => doc?.attributes?.name === "private-policy");

	if (staticDoc) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return (
			<MDXComponent
				obj={{ desc: staticDoc.attributes?.desc, updatedAt: staticDoc.attributes?.updatedAt }}
			/>
		);
	}
	return notFound();
};

export default PlicyPage;