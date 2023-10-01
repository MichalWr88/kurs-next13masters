"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { removeProductItem } from "@/app/(withNavBar)/cart/actions";
const RemoveCartItem = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			disabled={isPending}
			className="flex h-6 w-9 items-center  justify-center p-2  text-red-600 disabled:border-zinc-400 disabled:text-zinc-400"
			type="submit"
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onClick={() => {
				startTransition(async () => {
					await removeProductItem(Number(itemId));
					router.refresh();
				});
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<g fill-rule="evenodd">
					<path d="M4.25 5A.75.75 0 0 1 5 4.25h14a.75.75 0 0 1 .75.75v15.5A2.75 2.75 0 0 1 17 23.25H7a2.75 2.75 0 0 1-2.75-2.75V5Zm1.5.75V20.5c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V5.75H5.75Z" />
					<path d="M2.75 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 5ZM15.5 8.75a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0v-10a.75.75 0 0 1 .75-.75ZM8.5 8.75a.75.75 0 0 0-.75.75v10a.75.75 0 0 0 1.5 0v-10a.75.75 0 0 0-.75-.75ZM12 8.75a.75.75 0 0 0-.75.75v10a.75.75 0 0 0 1.5 0v-10a.75.75 0 0 0-.75-.75Z" />
					<path d="M6.75 5c0 .414.336.75.75.75H17a.75.75 0 0 0 .75-.75V3.5A2.75 2.75 0 0 0 15 .75H9.5A2.75 2.75 0 0 0 6.75 3.5V5Zm1.5-.75V3.5c0-.69.56-1.25 1.25-1.25H15c.69 0 1.25.56 1.25 1.25v.75h-8Z" />
				</g>
			</svg>
		</button>
	);
};

export default RemoveCartItem;
