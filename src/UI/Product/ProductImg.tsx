import { type ProductDataFragment } from "@/gql/graphql";
import MyImage, { type ImgFit } from "./MyImage";

type Props = {
	product?: ProductDataFragment | null;
	fit?: ImgFit;
};

const ProductImg = ({ product, fit }: Props) => {
	if (!product) return null;
	const { title, images } = product;
	return (
		<div className="relative min-h-[200px] overflow-hidden rounded-xl">
			{images?.data[0] && (
				<MyImage
					height={images?.data[0].attributes?.height}
					width={images?.data[0].attributes?.width}
					quality={20}
					url={images?.data[0].attributes?.url}
					title={title}
					fit={fit}
				/>
			)}
		</div>
	);
};

export default ProductImg;
