import Image from "next/image";
export default function Home() {
	return (
		<div className="flex h-full items-center justify-around mainWrapper">
			<h1 className="w-64 rounded-xl bg-brand-font-color p-8 text-center text-6xl uppercase text-brand-color-2">
				Online Shop
			</h1>
			<figure>
				<Image
					className="rounded-lg shadow-2xl"
					quality={20}
					priority
					data-testid="mePic"
					src={"/man.jpg"}
					alt={"man wearing a leather jacket"}
					width={400}
					height={200}
				/>
				<figcaption className="flex justify-center">our new brand</figcaption>
			</figure>
		</div>
	);
}
