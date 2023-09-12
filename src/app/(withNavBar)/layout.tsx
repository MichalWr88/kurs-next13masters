import Footer from "@/UI/Footer/Footer";
import ScrollWrapper from "@/UI/ScrollWrapper/ScrollWrapper";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ScrollWrapper>
			<main className="flex-grow flex justify-center">{children}</main>
			<Footer />
		</ScrollWrapper>
	);
}
