import Footer from "@/UI/Footer/Footer";
import NavBar from "@/UI/NavBar/NavBar";
// import ScrollWrapper from "@/UI/ScrollWrapper/ScrollWrapper";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex h-full w-full flex-col overflow-auto">
			<NavBar />
			<main className="flex-grow flex justify-center">{children}</main>
			<Footer />
		</div>
	);
}
