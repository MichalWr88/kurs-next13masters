import Image from "next/image";
import FacebookIcon from "../Icons/FacebookIcon";
import AppLink from "../Shared/AppLink";

export type Person = {
	id: number;
	name: string;
	position: string;
	desc: string;
	img: string;
};

const PersonItem = ({ person }: { person: Person }) => {
	const { img, name, desc, position } = person;
	return (
		<div className="flex h-full  w-full flex-col items-center text-center">
			<Image
				className="h-full w-40 rounded-md"
				quality={20}
				src={img}
				alt={"background"}
				width={150}
				height={200}
				placeholder="blur" // "empty" | "blur"
				blurDataURL="/blur.png"
				style={{ objectFit: "cover" }}
			/>

			<div className="w-full">
				<h2 className=" text-lg font-medium text-gray-900">{name}</h2>
				<h3 className="mb-3 text-gray-500">{position}</h3>
				<p className="mb-4">{desc}</p>
				<span className="inline-flex">
					<AppLink hover route="/">
						<FacebookIcon />
					</AppLink>
					<a className="ml-2 text-gray-500">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-5 w-5"
							viewBox="0 0 24 24"
						>
							<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
						</svg>
					</a>
					<a className="ml-2 text-gray-500">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-5 w-5"
							viewBox="0 0 24 24"
						>
							<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
						</svg>
					</a>
				</span>
			</div>
		</div>
	);
};

export default PersonItem;
