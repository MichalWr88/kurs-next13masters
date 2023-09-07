import Footer from "@/UI/Footer/Footer";
import NavBar from "@/UI/NavBar/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-full w-full flex-col relative overflow-auto ">
			<NavBar />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
