import Image from "next/image";
import BubleMessageIcon from "../Icons/BubleMessageIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";
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
				<span className="flex gap-3 justify-center">
					<AppLink hover route="/">
						<FacebookIcon />
					</AppLink>
					<AppLink hover route="/">
						<TwitterIcon />
					</AppLink>
					<AppLink hover route="/">
						<BubleMessageIcon />
					</AppLink>
		

				</span>
			</div>
		</div>
	);
};

export default PersonItem;
