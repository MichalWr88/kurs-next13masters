import Image from "next/image";
import React from "react";
import NavList from "../Navigation/NavList";
import AppLink from "../Shared/AppLink";

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

					<section className="body-font text-gray-600">
						<div className="container mx-auto">
							<div className="mb-20 flex w-full flex-col text-center">
								<h1 className=" mb-4 text-2xl font-medium text-gray-900">OUR TEAM</h1>
								<p className="mx-auto text-base leading-relaxed lg:w-2/3">
									Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
									farm-to-table. Franzen you probably heard of them.
								</p>
							</div>
							<div className="grid  grid-cols-1 items-center gap-4 md:grid-cols-4">
								<div className="flex h-full  w-full flex-col items-center text-center">
									<Image
										className="h-full w-40 rounded-md"
										quality={20}
										src={"/person1.jpg"}
										alt={"background"}
										width={150}
										height={200}
										placeholder="blur" // "empty" | "blur"
										blurDataURL="/blur.png"
										style={{ objectFit: "cover" }}
									/>

									<div className="w-full">
										<h2 className=" text-lg font-medium text-gray-900">Alper Kamu</h2>
										<h3 className="mb-3 text-gray-500">UI Developer</h3>
										<p className="mb-4">
											DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
										</p>
										<span className="inline-flex">
											<a className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
								</div>
								<div className="flex h-full w-full flex-col items-center text-center">
									<Image
										className="h-full w-40 rounded-md"
										quality={20}
										src={"/person2.jpg"}
										alt={"background"}
										width={150}
										height={200}
										placeholder="blur" // "empty" | "blur"
										blurDataURL="/blur.png"
										style={{ objectFit: "cover" }}
									/>
									<div className="w-full">
										<h2 className=" text-lg font-medium text-gray-900">Alper Kamu</h2>
										<h3 className="mb-3 text-gray-500">UI Developer</h3>
										<p className="mb-4">
											DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
										</p>
										<span className="inline-flex">
											<a className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
								</div>
								<div className="flex h-full w-full flex-col items-center text-center">
									<Image
										className="h-full w-40 rounded-md"
										quality={20}
										src={"/person3.jpg"}
										alt={"background"}
										width={150}
										height={200}
										placeholder="blur" // "empty" | "blur"
										blurDataURL="/blur.png"
										style={{ objectFit: "cover" }}
									/>
									<div className="w-full">
										<h2 className=" text-lg font-medium text-gray-900">Alper Kamu</h2>
										<h3 className="mb-3 text-gray-500">UI Developer</h3>
										<p className="mb-4">
											DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
										</p>
										<span className="inline-flex">
											<a className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
								</div>
								<div className="flex h-full w-full flex-col items-center text-center">
									<Image
										className="h-full w-40 rounded-md"
										quality={20}
										src={"/person4.jpg"}
										alt={"background"}
										width={150}
										height={200}
										placeholder="blur" // "empty" | "blur"
										blurDataURL="/blur.png"
										style={{ objectFit: "cover" }}
									/>
									<div className="w-full">
										<h2 className=" text-lg font-medium text-gray-900">Alper Kamu</h2>
										<h3 className="mb-3 text-gray-500">UI Developer</h3>
										<p className="mb-4">
											DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
										</p>
										<span className="inline-flex">
											<a className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="h-5 w-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</section>
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
					<span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
						<a className="text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-5 w-5"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-5 w-5"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
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
