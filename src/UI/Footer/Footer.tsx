import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import NavList from "../Navigation/NavList";
import AppLink from "../Shared/AppLink";
import TeamLIst from "./TeamLIst";

export function Footer() {
	return (
		<footer className="body-font text-gray-600">
			<div className="container mx-auto px-5 py-24">
				<div className=" flex flex-wrap justify-center md:flex-nowrap">
					<div className="w-full px-4 md:w-1/2 lg:w-1/6">
						<h2 className=" mb-3 text-center text-xl font-bold tracking-widest text-brand-color-2 ">
							CATEGORIES
						</h2>
						<NavList onlyCategories />
					</div>
					<TeamLIst />

					<div className="w-full px-4 md:w-1/2 lg:w-1/6">
						<h2 className=" mb-3 text-sm font-medium tracking-widest text-gray-900">SUBSCRIBE</h2>
						<div className="flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start lg:flex-wrap xl:flex-nowrap">
							<p className="mt-2 text-center text-sm text-gray-500 md:text-left">
								Bitters chicharrones fanny pack
								{/* <br className="hidden lg:block">waistcoat green juice</br> */}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-100">
				<div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
					<span className="ml-3 text-sm">2023 Michał Maleszewski</span>
					<AppLink route="/rules" hover>
						<span className="ml-3 text-sm">Terms of Use</span>
					</AppLink>
					<AppLink route="/private-policy" hover>
						<span className="ml-3 text-sm">Privacy Notice</span>
					</AppLink>
					<span className="flex mt-4 justify-center gap-4 text-gray-500 sm:ml-auto sm:mt-0 sm:justify-start">
						<AppLink hover route="/">
							<FacebookIcon stroke="currentColor" fill="currentColor" />
						</AppLink>

						<AppLink hover route="/">
							<TwitterIcon stroke="currentColor" fill="currentColor" />
						</AppLink>
						<AppLink hover route="/">
							<InstagramIcon stroke="currentColor" />
						</AppLink>
						<AppLink hover route="/">
							<LinkedinIcon stroke="currentColor" fill="currentColor" />
						</AppLink>
					</span>
				</div>
			</div>
		</footer>
	);
}
