"use client";
import { useEffect, experimental_useOptimistic as useOptimistic, useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useDebounce } from "usehooks-ts";
import { changeItemQuantity } from "@/app/(withNavBar)/cart/actions";

const maxQuantity = 10;
const minQuantity = 1;
const IncrementProductQuantity = ({
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
	const [value, setValue] = useState<number>(0)
	const debouncedChangeQuantity = useDebounce(value, 500);

	useEffect(() => {
		setValue(()=>optimisticQuantity)

		return () => {
			setValue(()=>0)
		}
	}, [optimisticQuantity])
	
	
	const formStatus = useFormStatus();
	const changeQuantity = (increment: boolean): undefined => {
		if (increment === undefined) return;
		const newQuantity = increment ? optimisticQuantity + 1 : optimisticQuantity - 1;
		console.log("changeQuantity");
		setOptimisticQuantity(newQuantity);
	};

	console.log("render", quantity,optimisticQuantity);
	useEffect(() => {
		const changeItem = async () => {
			if (quantity === optimisticQuantity && debouncedChangeQuantity === 0) return;
	
			await changeItemQuantity(itemId, debouncedChangeQuantity, price);
		};
		console.log("changeItem1",debouncedChangeQuantity, optimisticQuantity);
		changeItem().catch(console.error);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedChangeQuantity]);

	return (
		<form className="flex items-start justify-center">
			<button
				disabled={formStatus.pending || optimisticQuantity <= minQuantity}
				className="flex h-6 w-6 items-center justify-center border border-zinc-950 disabled:border-zinc-400 disabled:text-zinc-400"
				type="submit"
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				formAction={() => changeQuantity(false)}
			>
				-
			</button>
			<span className="w-8 text-center">{formStatus.pending? "...":value}</span>
			<button
				disabled={formStatus.pending || optimisticQuantity >= maxQuantity}
				className="flex h-6 w-6 items-center justify-center border border-zinc-950 disabled:text-zinc-400"
				type="submit"
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				formAction={() => changeQuantity(true)}
			>
				+
			</button>
		</form>
	);
};

export default IncrementProductQuantity;
