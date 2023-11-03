import { cookies } from "next/headers";
import CookieDeclineButton from "./CookieDeclineButton";

const CookieModalForm = () => {
	const cookieFormAction = async () => {
		"use server";

		cookies().set("topShopCookie", "true", {
			httpOnly: true,
			sameSite: "lax",
		});
	};

	return (
		<form
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			action={cookieFormAction}
			className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 "
		>
			<CookieDeclineButton />
			<button
				type="submit"
				className="active:bg-primary-700 ml-1 inline-block  rounded bg-emerald-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]  transition duration-150 ease-in-out hover:bg-emerald-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  "
			>
				I accept
			</button>
		</form>
	);
};

export default CookieModalForm;
