import CookieModal from "@/UI/CookieInfo/CookieModal";
import { Footer } from "@/UI/Footer/Footer";
import NavBar from "@/UI/NavBar/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex h-full w-full flex-col overflow-auto" id="app-wrapper">
			<NavBar />
			<main className="flex flex-grow justify-center">{children}</main>
			<Footer />
			<CookieModal />
		</div>
	);
}
