"use client";
/* eslint-disable no-unused-vars */

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { usePagination, DOTS } from "../Pagination/usePagination";
import PaginationItem from "./PaginationItem";
import type { Route } from "next";

type Props = {
	basePath: Route;
	onPageChange?: (page: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
};
const RoutePagination = (props: Props) => {
	const pathName = usePathname();
	const { totalCount, siblingCount = 1, pageSize, basePath } = props;
	const [currentPage, setCurrentPath] = useState(0);
	useEffect(() => {
		setCurrentPath(() => Number([...pathName.split("/")].reverse()[0]));

		return () => {
			setCurrentPath(() => 0);
		};
	}, [pathName]);

	
	const paginationRange = usePagination({
		currentPage: currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	// If there are less than 2 times in pagination range we shall not render the component
	if ( paginationRange.length < 2) {
		return null;
	}
	const lastPage = paginationRange[paginationRange.length - 1];

	return (
		<nav aria-label="Page navigation example">
			<ul className="list-style-none flex justify-center">
				<PaginationItem
					href={`${basePath}/${currentPage.toString()}` as Route}
					blocked={currentPage === 1}
				>
					{"Previous"}
				</PaginationItem>
				{paginationRange.map((pageNumber, index) => {
					if (pageNumber === DOTS) {
						return (
							<PaginationItem
							index={index}	
								key={`pagination-${pageNumber}-${index}`}
								href={`${basePath}/${currentPage.toString()}` as Route}
								blocked
							>
								<span className="tracking-widest	">{"..."}</span>
							</PaginationItem>
						);
					}

					return (
						<PaginationItem
							key={`pagination-${pageNumber}`}
							href={`${basePath}/${pageNumber.toString()}` as Route}
							selected={pageNumber === currentPage}
						>
							{pageNumber}
						</PaginationItem>
					);
				})}
				<PaginationItem
					href={`${basePath}/${(currentPage + 1).toString()}` as Route}
					blocked={currentPage === lastPage}
				>
					{"Next"}
				</PaginationItem>
			</ul>
		</nav>
	);
};

export default RoutePagination;
