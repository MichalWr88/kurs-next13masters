"use client";
import React, { type ReactNode, useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";

type Props = {
	children: ReactNode;
};

const ScrollWrapper = ({ children }: Props) => {
	const [hideNav, setHideNav] = useState(false);
	const [prevScrollTop, setPrevScrollTop] = useState(0);
	const navbarRef = useRef<HTMLDivElement | null>(null);

	const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
		const scrollTop = event.currentTarget.scrollTop;
		setPrevScrollTop(() => scrollTop);
		if (
			navbarRef?.current?.clientHeight &&
			scrollTop >= navbarRef?.current?.clientHeight &&
			prevScrollTop < scrollTop
		) {
			console.log("true");
			setHideNav(() => true);
		} else {
			console.log("false");
			setHideNav(() => false);
		}
	};
	return (
		<div className="relative flex h-full w-full flex-col overflow-auto " onScroll={scrollHandler}>
			<NavBar ref={navbarRef} hide={hideNav} />
			{children}
		</div>
	);
};

export default ScrollWrapper;
