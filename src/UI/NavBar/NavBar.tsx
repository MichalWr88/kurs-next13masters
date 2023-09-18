"use client";
import { clsx } from "clsx";
import Image from "next/image";
import { forwardRef, useMemo } from "react";
import NavList from "../Navigation/NavList";
type Props = {
	hide: boolean;
};
// eslint-disable-next-line react/display-name
const NavBar = forwardRef<HTMLDivElement, Props>(({ hide }, ref) => {
	const navList = useMemo(() => <NavList />, []);
	console.log("hide", hide);
	return (
		<header
			className={clsx(
				"sticky z-50  flex justify-center bg-brand-bg-color transition-all delay-150 duration-500 ease-in-out",
				hide ? "-top-28" : "top-0",
			)}
			ref={ref}
		>
			<div className="container flex justify-center">
				<Image
					className=""
					quality={20}
					priority
					src={"/logo1.png"}
					alt={"man wearing a leather jacket"}
					width={78}
					height={68}
				/>

				<nav className="flex h-24 justify-center p-4">
					<ul className="container flex ">{navList}</ul>
				</nav>
			</div>
		</header>
	);
});

export default NavBar;
