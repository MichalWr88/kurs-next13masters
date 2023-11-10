import Image from "next/image";

export type ImgFit = "fill" | "contain" | "cover" | "none" | "scale-down";
type Props = {
	quality: number;
	url?: string;
	title?: string;
	width?: number | null;
	height?: number | null;
	fit?: ImgFit;
};

const MyImage = ({ height, quality, title, width, fit, url }: Props) => {
	return (
		<Image
			className="relative  w-full transition-all delay-100 duration-300 ease-in-out hover:scale-125 hover:opacity-80 "
			quality={quality || 20}
			placeholder="blur" // "empty" | "blur"
			blurDataURL="/blur.png"
			src={`${process.env.GRAPHQL_URL}${url}` || ""}
			alt={title|| ""}
			width={width ?? 200}
			height={height ?? 200}
			style={{ objectFit: fit, maxWidth: "100%", height: "auto" }}
		/>
	);
};

export default MyImage;
