"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const AddCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			disabled={formStatus.pending}
			type="submit"
			className="ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none disabled:cursor-wait disabled:bg-zinc-400"
		>
			Add to cart
		</button>
	);
};

export default AddCartButton;
