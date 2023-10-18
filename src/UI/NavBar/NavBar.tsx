import { clsx } from "clsx";
import Image from "next/image";
import { Suspense, useMemo } from "react";
import MainLoader from "../Loaders/MainLoader";
import NavList from "../Navigation/NavList";
import SearchBar from "../Search/SearchBar";
import CartCount from "./CartCount";

// eslint-disable-next-line react/display-name
const NavBar = () => {
	const navList = useMemo(() => <NavList />, []);

	return (
		<header
			className={clsx(
				"sticky top-0  z-50 flex w-screen justify-center bg-brand-bg-color transition-all delay-150 duration-500 ease-in-out pb-3 shadow-md",
			)}
		>
			<div className="container flex flex-wrap items-center justify-center">
				<Image
				className="h-auto"
					quality={20}
					src={"/logo1.png"}
					alt={"man wearing a leather jacket"}
					width={70}
					height={68}
				/>

				<nav className="relative flex h-24 justify-center overflow-hidden p-4">
					<ul className="container flex w-full overflow-x-auto overflow-y-hidden">
						<Suspense fallback={<MainLoader />}>{navList}</Suspense>
					</ul>
				</nav>
				<div className="flex w-full md:w-auto px-4 box-border md:justify-end">
				<SearchBar />

				<CartCount />
				</div>
			</div>
		</header>
	);
};

export default NavBar;
