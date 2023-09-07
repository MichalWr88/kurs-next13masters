import React, { type ReactNode } from "react";
import  "./Body.scss";
type Props = {
	children: ReactNode;
};

const Body = ({ children }: Props) => (
	<body
		className={`flex h-screen w-screen flex-col content-center items-center text-brand-font-color  globalBg`}
	>
		{children}
	</body>
);

export default Body;
