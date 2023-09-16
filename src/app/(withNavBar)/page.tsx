export default function Home() {
	return (
		<div className=" flex h-full w-full flex-col items-center  justify-center">
			<section className="globalBg h-[calc(100vh-96px)] w-full flex flex-col justify-center items-center">
				<h1 className=" p-3 text-center text-6xl uppercase text-brand-color-2 bg-brand-bg-color">
					Taste on Our Hands
				</h1>

				<h2 className="flex justify-center uppercase text-brand-bg-color text-4xl mt-7">- Welcome - </h2>
			</section>
			<section>
				<h2>WELLCOME TO OUR Top</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				</p>
				<button className="bg-brand-color-2 p-4">MAKE A RESERVATION</button>
			</section>
			<section className="grid grid-cols-2">
				<div> img bedzie tu</div>
				<article>
					<header>MAKE EVERY COOKING TIME A SPECIAL MOMENT</header>
					<div>icon</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore ezt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
					</p>
				</article>
			</section>
		</div>
	);
}
