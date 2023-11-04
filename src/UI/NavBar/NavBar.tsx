import Image from "next/image";
import { Suspense, useMemo } from "react";
import MainLoader from "../Loaders/MainLoader";
import NavList from "../Navigation/NavList";
import ScrollWrapper from "../ScrollWrapper/ScrollWrapper";
import SearchBar from "../Search/SearchBar";
import CartCount from "./CartCount";

// eslint-disable-next-line react/display-name
const NavBar = () => {
	const navList = useMemo(() => <NavList />, []);
	const wrapper = useMemo(
		() => (
			<ScrollWrapper>
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
					<div className="box-border flex w-full px-4 md:w-auto md:justify-end">
						<SearchBar />

						<CartCount />
					</div>
				</div>
			</ScrollWrapper>
		),

		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);
	return wrapper;
};

export default NavBar;
