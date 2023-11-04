"use client";
import { clsx } from "clsx";
import React, { useEffect, type ReactNode, useState, useRef } from "react";

type Props = {
	children: ReactNode;
};

const ScrollWrapper = ({ children }: Props) => {
	const [hideNav, setHideNav] = useState(false);
	const ref = useRef(0);
	const wrapper = useRef<HTMLElement | null>(null);

	const onScroll = (event: Event) => {
		const ev = event.target as HTMLElement;
		const currentScrollTop = ev.scrollTop;
		if (ref.current < currentScrollTop) {
			if (hideNav) return;
			setHideNav(true);
		} else {
			setHideNav(false);
		}
		ref.current = currentScrollTop;
	};

	useEffect(() => {
		const ev = document.getElementById("app-wrapper");
		wrapper.current = ev;

		if (!wrapper.current) return;

		wrapper.current.addEventListener("scroll", onScroll);
		return () => {
			if (!wrapper.current) return;
			wrapper.current.removeEventListener("scroll", onScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<header
			id="app-navbar"
			className={clsx(
				"sticky z-50 box-border flex w-full justify-center bg-brand-bg-color pb-3 shadow-md transition-all delay-150 duration-500 ease-in-out",
				hideNav ? "-top-28" : "top-0",
			)}
		>
			{children}
		</header>
	);
};

export default ScrollWrapper;
