
import React, { type ReactNode} from "react";
import NavBar from "../NavBar/NavBar";

type Props = {
	children: ReactNode;
};

const ScrollWrapper = ({ children }: Props) => {
	return (
		<div className="relative flex h-full w-full flex-col overflow-auto ">
			<NavBar />
			{children}
		</div>
	);
};

export default ScrollWrapper;
