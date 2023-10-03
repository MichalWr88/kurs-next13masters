import { clsx } from "clsx";
import { Archivo_Narrow , Pacifico } from "next/font/google";
import Body from "@/UI/Body/Body";
import "./globals.scss";

const interRoboto = Archivo_Narrow({ subsets: ["latin"], weight: "400", variable: '--font-roboto',display: 'swap', adjustFontFallback: false});
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const interPacifico = Pacifico({ subsets: ["latin"], weight: "400" , variable: '--font-nanum',display: 'swap', adjustFontFallback: false});



export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={clsx(interRoboto.className)}>
			<Body>{children}</Body>
		</html>
	);
}
