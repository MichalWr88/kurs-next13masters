"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { removeProductItem } from "@/app/(withNavBar)/cart/actions";
import TrashIcon from "../Icons/TrashIcon";
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
			<TrashIcon />
		</button>
	);
};

export default RemoveCartItem;
