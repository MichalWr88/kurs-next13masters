import Image from "next/image";
import CollectionsList from "@/UI/Collections/CollectionsList";
import RecommendedProducts from "@/UI/RecommendedProducts/RecommendedProducts";

export default function Home() {
	return (
		<div className=" flex h-full w-full flex-col items-center  justify-center">
			<section className="relative flex h-[calc(100vh-96px)] w-full flex-col items-center justify-center">
				<Image
					className="absolute left-0 top-0 -z-0 h-full w-full"
					quality={20}
					src={"/bg1.png"}
					alt={"background"}
					fill
					placeholder="blur" // "empty" | "blur"
					blurDataURL="/blur.png"
					style={{ objectFit: "cover" }}
				/>
				<h1 className=" z-10 bg-brand-bg-color px-3 text-center font-nanum text-9xl uppercase text-brand-color-2 rounded-xl">
					Taste on Our Hands
				</h1>

				<h2 className="z-10 mt-7 flex justify-center text-3xl uppercase tracking-tight text-brand-bg-color ">
					- Welcome -
				</h2>
			</section>
			<section className="my-32 flex flex-col items-center justify-center">
				<h2 className="mb-9 flex items-center text-4xl text-brand-color-2">
					WELCOME TO OUR <span className="pl-3 font-nanum text-7xl">Top</span>
				</h2>
				<p className="mb-8 max-w-2xl text-center text-2xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				</p>
				<button className="bg-brand-color-3 px-7 py-3 text-brand-bg-color hover:shadow-md">MAKE A RESERVATION</button>

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
			<CollectionsList/>
			<RecommendedProducts />
		</div>
	);
}
