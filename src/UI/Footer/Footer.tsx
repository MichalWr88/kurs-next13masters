import React from "react";
import NavList from "../Navigation/NavList";

type Props = {};

function Footer({}: Props) {
	return (
		<footer className="bg-brand-color-4 box-border flex flex-wrap ">
			<div className="bg-brand-color-3 flex w-full grow  items-center justify-center gap-4">
				<p className="my-2 uppercase">contact us</p>
				<a href="tel:+48000000000" className="hover:text-brand-color-2 block">
					+48 000 000 000
				</a>
				<a href="mailto:example@shop.com" className="hover:text-brand-color-2 block">
					example@shop.com
				</a>
				<a></a>
			</div>
			<div>
				<nav className="px-4">
					<NavList />
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
