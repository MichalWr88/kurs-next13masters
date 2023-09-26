type Props = {
	collection:
		| {
				name: string;
				description?: string | null | undefined;
		  }
		| null
		| undefined;
};

const CollectionsHeader = async ({collection}: Props) => {
	if (!collection || !collection.name || !collection?.description) return null;
	const { name, description } = collection;
	return (
		<section className="py-4">
			<h3 className="text-3xl text-brand-color-2 mb-6">{name}</h3>
			<p className="text-justify">{description}</p>
		</section>
	);
};

export default CollectionsHeader;
