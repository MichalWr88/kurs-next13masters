"use client";
import { useRouter } from "next/navigation";
import { type ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

const SearchBar = () => {
	const [value, setValue] = useState<string | undefined>();
	const debouncedValue = useDebounce<string | undefined >(value?.trim(), 500);
	const router = useRouter();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	// Fetch API (optional)
	useEffect(() => {
		if (debouncedValue === undefined) return;
		if (!debouncedValue) {

			router.push(`/products`);
			return;
		}
		router.push(`/search?query=${encodeURIComponent(debouncedValue)}`);
		// Do fetch here...
		// Triggers when "debouncedValue" changes
	}, [debouncedValue]);

	return (
		<div className="relative flex w-80  flex-wrap  items-center ">
			<input
				role="searchbox"
				type="search"
				className="focus:border-primary dark:focus:border-primary relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
				placeholder="Search"
				aria-label="Search"
				aria-describedby="button-addon2"
				value={value ?? ""}
				onChange={handleChange}
			/>

			<span
				className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-brand-font-color"
				id="basic-addon2"
			></span>
		</div>
	);
};

export default SearchBar;
