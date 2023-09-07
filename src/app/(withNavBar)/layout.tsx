import Footer from "@/UI/Footer/Footer";
import NavBar from "@/UI/NavBar/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex h-full w-full flex-col overflow-auto ">
			<NavBar />
			<main className="mainWrapper flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
