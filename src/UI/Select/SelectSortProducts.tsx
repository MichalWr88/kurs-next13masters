"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent } from "react";
import type { Route } from "next";

const SelectSortProducts = ({
	searchParams,
	basePath,
}: {
	basePath: Route<string>;
	searchParams: { sortDir: string; sortBy: string };
}) => {
	const router = useRouter();
	const params = useSearchParams();
	const searchWithSort = (elem: ChangeEvent<HTMLSelectElement>) => {
		const value = elem.target.value;
		const query = params.get("query");
		const queryParams = `query=${query}`;
		if (value === "default") {
			router.push(`${basePath}${query ? "?" + queryParams : ""}` as Route<string>);
		} else {
			router.push(
				`${basePath}?sortBy=${encodeURIComponent(elem.target.value as unknown as string)}&sortDir=asc${
					query ? "&" + queryParams : ""
				}`,
			);
		}
	};

	return (
		<div className="flex w-full items-center justify-end py-4">
			<p className="px-2">Sort by:</p>
			<select
				defaultValue={searchParams.sortBy}
				onChange={searchWithSort}
				className="focus:border-primary dark:focus:border-primary relative m-0 block w-32 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
			>
				<option value="default">Default</option>
				<option value="price" data-testid="sort-by-price">
					Price
				</option>
				<option value="rating" data-testid="sort-by-rating">
					Rating
				</option>
			</select>
		</div>
	);
};

export default SelectSortProducts;
