import React from "react";
import NavList from "../Navigation/NavList";
import AppLink from "../Shared/AppLink";
import TeamLIst from "./TeamLIst";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";

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
					<AppLink route="/policy" hover>
						<span className="ml-3 text-sm">Privacy Notice</span>
					</AppLink>
					<span className="mt-4 inline-flex justify-center text-gray-500 sm:ml-auto sm:mt-0 sm:justify-start">
						<AppLink hover route="/">
							<FacebookIcon stroke="currentColor" fill="currentColor" />
						</AppLink>

						<AppLink hover route="/">
							<TwitterIcon stroke="currentColor" fill="currentColor" />
						</AppLink>

						<a className="ml-3 text-gray-500">
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-5 w-5"
								viewBox="0 0 24 24"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>
						<a className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="0"
								className="h-5 w-5"
								viewBox="0 0 24 24"
							>
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
								></path>
								<circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}
