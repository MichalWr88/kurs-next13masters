"use client";
import { useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { changeItemQuantity } from "@/app/(withNavBar)/cart/actions";

const maxQuantity = 10;
const minQuantity = 1;
const ItemProductQuantity = ({
	itemId,
	quantity,
	price,
}: {
	itemId: string;
	quantity: number;
	price: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
	const formStatus = useFormStatus();
	return (
		<form className="flex items-start justify-center">
			<button
				data-testid="decrement"
				disabled={formStatus.pending || optimisticQuantity <= minQuantity}
				className="flex h-6 w-6 items-center justify-center border border-zinc-950 disabled:border-zinc-400 disabled:text-zinc-400"
				type="submit"
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1, price);
				}}
			>
				-
			</button>
			<span className="w-8 text-center" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				data-testid="increment"
				disabled={formStatus.pending || optimisticQuantity >= maxQuantity}
				className="flex h-6 w-6 items-center justify-center border border-zinc-950 disabled:border-zinc-400 disabled:text-zinc-400"
				type="submit"
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1, price);
				}}
			>
				+
			</button>
		</form>
	);
};

export default ItemProductQuantity;
