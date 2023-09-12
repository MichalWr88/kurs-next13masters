"use client";
import { clsx } from "clsx";
import { forwardRef, useMemo } from "react";
import NavList from "../Navigation/NavList";
type Props = {
	hide: boolean;
};
// eslint-disable-next-line react/display-name
const NavBar = forwardRef<HTMLDivElement, Props>(({ hide }, ref) => {
	const navList = useMemo(() => <NavList />, []);

	return (
		<header className={clsx("sticky top-0 z-50 bg-brand-color-3 transition-all ease-in-out duration-500 delay-150", hide && "-top-28")} ref={ref}>
			<nav className="flex justify-center p-4">
				<ul className="container flex h-8">{navList}</ul>
			</nav>
		</header>
	);
});

export default NavBar;
