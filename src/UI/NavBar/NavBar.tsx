import { clsx } from "clsx";
import Image from "next/image";
import { Suspense, useMemo } from "react";
import NavList from "../Navigation/NavList";
import SearchBar from "../Search/SearchBar";
import CartCount from "./CartCount";

// eslint-disable-next-line react/display-name
const NavBar = () => {
	const navList = useMemo(() => <NavList />, []);

	return (
		<header
			className={clsx(
				"sticky z-50  flex justify-center bg-brand-bg-color transition-all delay-150 duration-500 ease-in-out",
			)}
		>
			<div className="container flex items-center justify-center">
				<Image
					className=""
					quality={20}
					src={"/logo1.png"}
					alt={"man wearing a leather jacket"}
					width={78}
					height={68}
				/>

				<nav className="flex h-24 justify-center p-4">
					<ul className="container flex ">
						<Suspense fallback={"loading...."}>{navList}</Suspense>
					</ul>
				</nav>
				<SearchBar/>
				<CartCount />
			</div>
		</header>
	);
};

export default NavBar;
