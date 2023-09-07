"use client";
import { usePathname } from "next/navigation";

type Props = {
	label: string;
	path: string;
};

const LinkMenu = ({ label,path }: Props) => {
	const routePath = usePathname();
	return (
		<div
			className={`flex basis-60 justify-around  mx-2 uppercase  py-1 px-2 hover:bg-brand-color-4 ${
				routePath === path.toLowerCase() ? "border-b-4 border-brand-color-2" : ""
			}`}
		>
			{label}
		</div>
	);
};

export default LinkMenu;
