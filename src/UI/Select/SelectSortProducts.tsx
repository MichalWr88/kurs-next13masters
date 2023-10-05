"use client";

import { useRouter } from "next/navigation";
import { type ChangeEvent } from "react";

const SelectSortProducts = ({
	searchParams,
}: {
	searchParams: { sortDir: string; sortBy: string };
}) => {
	const router = useRouter();
	const searchWithSort = (elem: ChangeEvent<HTMLSelectElement>) => {
		const value = elem.target.value;
		console.log(elem.target.value);
		if (value === "default") {
			router.push(`/products`);
		} else {
			router.push(
				`/products?sortBy=${encodeURIComponent(elem.target.value as unknown as string)}&sortDir=asc`,
			);
		}
	};

	return (
		<div>
			<select
				name="selectedFruit"
				defaultValue={searchParams.sortBy}
				onChange={searchWithSort}
				className="focus:border-primary dark:focus:border-primary relative m-0 block w-36 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
			>
				<option value="default">Default</option>
				<option value="price" data-testid="sort-by-price">
					sort by price
				</option>
				<option value="rating" data-testid="sort-by-rating">
					sort by rating
				</option>
			</select>
		</div>
	);
};

export default SelectSortProducts;
