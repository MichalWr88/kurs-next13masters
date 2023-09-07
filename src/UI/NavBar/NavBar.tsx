
import NavList from "../Navigation/NavList";

const NavBar = async () => (
	<header className="bg-brand-color-3 sticky top-0">
		<nav className="flex justify-center p-4">
			<ul className="container flex h-8">
				<NavList />
			</ul>
		</nav>
	</header>
);

export default NavBar;
