import { cookies } from "next/headers";
import AppLink from "../Shared/AppLink";
import CookieModalForm from "./CookieModalForm";

const CookieModal = () => {
	const topShopCookie = cookies().get("topShopCookie")?.value;

	if (topShopCookie) {
		return null;
	}

	return (
		<div className="fixed left-0 top-0   z-50 flex h-full w-full items-center overflow-y-auto overflow-x-hidden outline-none after:absolute after:z-50 after:h-full after:w-full after:bg-brand-font-color after:opacity-80">
			<div className="pointer-events-none relative z-[51] w-auto  translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
				<div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none ">
					<div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
						<h5 className="text-xl font-medium leading-normal text-neutral-800 " id="exampleModalLabel">
							Hello, would you like a cookie ?
						</h5>
					</div>
					<div className="relative flex flex-auto flex-col  items-start p-4" data-te-modal-body-ref>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam quis exercitation.
						<AppLink route="/rules" hover>
							<span className="ml-3 text-sm text-brand-color-3">Terms of Use</span>
						</AppLink>
						<AppLink route="/private-policy" hover>
							<span className="ml-3 text-sm text-brand-color-3">Privacy Notice</span>
						</AppLink>
					</div>

					<CookieModalForm />
				</div>
			</div>
		</div>
	);
};

export default CookieModal;
